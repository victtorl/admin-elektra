<template>
<form>

    <!-- <button class="bg-red-900 text-yellow-400 px-2 py-1.5 rounded-md" @click="agregadoMasivodeCampos()" >agregado masivo funcion peligrosa 💀</button> -->
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input type="text" id="nombre" v-model="nombre"  class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0  " placeholder="" required />
            <!-- <label v-if="varmatch" class="text-red-800 text-md  font-normal">Existe un producto con este nombre!!</label> -->
        </div>
        <div>
            <label for="marca" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
            <input type="text" id="marca" v-model="marca"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
            <input type="text" id="codigo" v-model="codigo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medida</label>
            <input type="text" id="medida" v-model="medida" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> 

        <!-- select  start -->
        <div>
        <label htmlFor="categoria" class="block text-sm/6 font-medium text-gray-900">
            Categoria
        </label>
        <div class="mt-2 grid grid-cols-1">
            <select
            v-model="selected"
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
            <fwb-checkbox v-model="check" :label="`${check?'SI':'NO'}`" /> 
        </div>   
    </div>

     <!-- text area start -->
     <div>
        <label for="comment" class="block text-sm/6 font-medium text-gray-900">Descripcion el producto</label>
        <div class="mt-2">
        <textarea rows="4" name="comment" v-model="desc" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 border-none focus:ring-0 sm:text-sm/6" />
        </div>
    </div>
     <!-- text area end -->
</form>
</template>


<script setup>
import { watch,ref } from 'vue';
import {useProductStore} from '../../stores/formstore'
import { agregadoMasivodeCampos, ismatchName } from '../../../firebase';
import { FwbCheckbox } from 'flowbite-vue'


const prodST=useProductStore()

const marca=ref('')
const nombre=ref('')
const codigo=ref()
const medida=ref()
const check = ref(false)
const desc=ref('')


const selected = ref(0)
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




watch([marca,nombre,codigo,medida,check,selected,desc],() => {

    prodST.setnewProduct({
        'marca':marca.value,
        'nombre':nombre.value,
        'codigo':codigo.value,
        'medida':medida.value,
        'oferta':check.value,
        'categoria':selected.value,
        'description':desc.value
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