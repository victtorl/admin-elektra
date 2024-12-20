<template>
    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="nombre" v-model="prodST.editProduct.data.nombre"  class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0  " placeholder="" required />
                <label v-if="varmatch" class="text-red-800 text-md  font-normal">Existe un producto con este nombre!!</label>
            </div>
            <div>
                <label for="marca" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input type="text" id="marca" v-model="prodST.editProduct.data.marca"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
                <input type="text" id="codigo" v-model="prodST.editProduct.data.codigo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medida</label>
                <input type="text" id="medida" v-model="prodST.editProduct.data.medida" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>


                <!-- select  start -->
            <div>
            <label htmlFor="categoria" class="block text-sm/6 font-medium text-gray-900">
                Categoria
            </label>
            <div class="mt-2 grid grid-cols-1">
                <select
                v-model="prodST.editProduct.data.categoria"
                id="options"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
                </select>

                <ChevronDownIcon
                aria-hidden="true"
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
            </div>
            </div>
            <!-- select end -->

            <div>
            <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Está en oferta?</label>
            <fwb-checkbox v-model="prodST.editProduct.data.oferta" :label="`${prodST.editProduct.data.oferta?'SI':'NO'}`" /> 
            </div>   
        </div>


        <div>
            <label for="comment" class="block text-sm/6 font-medium text-gray-900">Archivo Pdf (Opcional)</label>
            <input class="block w-full mb-2 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size" 
            type="file"

            @change="(event) => handelFileUpload(event)" 
            >
            <div v-if="prodST.editProduct.data.fichatecnica!==''" class="w-full flex justify-between" >
                <a :href="prodST.fichatecnica" target="_blank" rel="noopener noreferrer" class="underline  text-elecktraamarillo bg-elecktranegro px-2 py-0.5 " >Ver Ficha</a>
                <button @click="EliminarPdfPorUrlFn(prodST.editProduct.data.fichatecnica)" target="_blank" rel="noopener noreferrer" class="underline  text-white bg-red-900 px-2 py-0.5 " >Eliminar Ficha</button>
            </div>
        </div>

             <!-- text area start -->
            <div>
                <label for="comment" class="block text-sm/6 font-medium text-gray-900">Descripcion el producto</label>
                <div class="mt-2">
                <textarea rows="4" name="comment" v-model="prodST.editProduct.data.description" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 border-none focus:ring-0 sm:text-sm/6" />
                </div>
            </div>
            <!-- text area end -->

    </form>
    </template>
    
    
    <script setup>
    import { watch,ref } from 'vue';
    import {useProductStore} from '../../stores/formstore'
    import { EliminarPdfPorUrl,uploadPdf, ismatchName } from '../../../firebase';
    import { FwbCheckbox } from 'flowbite-vue'
    
    const prodST=useProductStore()
    
    const marca=ref('')
    const nombre=ref('')
    const codigo=ref()
    const medida=ref()
    const check = ref(false)
    const desc=ref('')


    const selected = ref(prodST.editProduct.data.categoria)
    const options = ref([
    { text: 'Otros', value: 0 },
    { text: 'Herramientas para terminales y cables', value: 1 },
    { text: 'Mangas termocontraibles ', value: 2 },
    { text: 'Terminales de compresión', value: 3 },
    { text: 'Terminales sobremoldeados', value: 3 },
    { text: 'Cintillos y Espirales', value: 4 },
    { text: 'Enchufes y Tomas Industriales', value: 5 },
    { text: 'Térmicos', value: 6 },
    { text: 'Productos Rittal', value: 7 },
    { text: 'Phoenix Contact', value: 8 },
    { text: 'Canaletas y Riel Din ranuradas', value: 9 },
    { text: 'Cables', value: 10 },
    ])


    ////upload ficha tecnica start
    const generateId = () => Date.now().toString(35) + Math.random().toString(36).slice(2)

    const handelFileUpload = async (e) => {
        var files = e.target.files[0] 
        const metadata = {
        contentType: e.name,
        name:e.name
        };
        //SUBIR UNA ficchatecnica Y PONERLO en el campo FICHA tecnica -- CHANCAR O SETEAR EL CAMPO fichatecnica DE NEW PRODUCT
        console.log(files);
        prodST.setFichaTecnica(await uploadPdf(files,generateId()),metadata)
        prodST.editProduct.data.fichatecnica=prodST.fichatecnica
        // prodST.setEditProduct({ 'fichatecnica':prodST.fichatecnica})  
    };

    const EliminarPdfPorUrlFn=(url) => {
        EliminarPdfPorUrl(url)
        prodST.limpiarFichaTecnica()
        prodST.editProduct.data.fichatecnica=prodST.fichatecnica
    }

    ///upload ficha tecnica end

    
    watch([marca,nombre,codigo,medida,check,selected],() => {
    
        prodST.setEditProduct({
            'marca':marca.value,
            'nombre':nombre.value,
            'codigo':codigo.value,
            'medida':medida.value,
            'oferta':check.value,
            'categoria':selected.value,
            'description':desc.value,
            'fichatecnica':prodST.fichatecnica
        })
     
    })
    
    const varmatch=ref(false)
    watch(nombre,()=>{
    
        PromesaGood()
    
    })
    
    
    const PromesaGood=() => {
        const nuevo = new Promise(res => {
        res(ismatchName(nombre.value))
        })
        nuevo.then(
            resu => varmatch.value=!resu
        )
        .catch((err => console.log(err))) 
    }
    
    
    </script>