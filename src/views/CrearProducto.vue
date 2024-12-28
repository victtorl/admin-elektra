<template>

  <div class="w-full h-full font-popi  p-6">
    <p class="mb-2 bg-elecktranegro text-elecktraamarillo font-semibold rounded-lg text-center py-1 ">Creación de nuevo producto</p>
    <div class="grid md:grid-cols-2 gap-x-6">
      <div class="flex flex-col gap-y-4">
        <form>
          <!-- <button class="bg-red-900 text-yellow-400 px-2 py-1.5 rounded-md" @click="agregadoMasivodeCampos()" >agregado masivo funcion peligrosa 💀</button> -->
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" id="nombre" v-model="stateform.nombre"
                class="  bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
               :class="{ 'border-red-500 border-2': v$.nombre.$errors.length }"
                placeholder="" required />
              <!-- <label v-if="varmatch" class="text-red-800 text-md  font-normal">Existe un producto con este nombre!!</label> -->
            </div>
            <div>
              <label for="marca" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
              <input type="text" id="marca" v-model="stateform.marca"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                :class="{ 'border-red-500 border-2': v$.marca.$errors.length }"
                placeholder="" required />
            </div>
            <div>
              <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
              <input type="text" id="codigo" v-model="stateform.codigo"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                :class="{ 'border-red-500 border-2': v$.codigo.$errors.length }"
                placeholder="" required />
            </div>
            <div>
              <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medida</label>
              <input type="text" id="medida" v-model="stateform.medida"
              :class="{ 'border-red-500 border-2': v$.medida.$errors.length }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                placeholder="" required />
            </div>

            <!-- select  start -->
            <div>
              <label htmlFor="categoria" class="block text-sm/6 font-medium text-gray-900">
                Categoria
              </label>
              <div class="mt-2 grid grid-cols-1">
                <select v-model="selected" id="options"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.text }}
                  </option>
                </select>

                <ChevronDownIcon aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
              </div>
            </div>
            <!-- select end -->
            <div>
              <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Está en
                oferta?</label>
              <fwb-checkbox v-model="check" :label="`${check ? 'SI' : 'NO'}`" />
            </div>
          </div>

          <div>
            <label for="comment" class="block text-sm/6 font-medium text-gray-900">Archivo Pdf (Opcional)</label>
            <div class="w-full flex flex-col" >
              <input
              class="block w-full  text-xs text-transparent "
              id="small_size" type="file" @change="(event) => handelFileUpload(event)">
              <p class="text-sm my-2 underline" >{{ utilST.metadata?.fullPath }}</p>
             </div>
              <div v-if="prodST.fichatecnica !== ''" class="w-full flex justify-between">
              <a :href="prodST.fichatecnica" target="_blank" rel="noopener noreferrer"
                class="underline  text-elecktraamarillo bg-elecktranegro px-2 py-0.5 ">Ver Ficha</a>                
              <button @click="EliminarPdfPorUrlFn(prodST.fichatecnica)" target="_blank" rel="noopener noreferrer"
                class="underline  text-white bg-red-900 px-2 py-0.5 ">Eliminar Ficha</button>
            </div>
          </div>


          <!-- text area start -->
          <div>
            <label for="comment" class="block text-sm/6 font-medium mt-2 text-gray-900">Descripcion el producto</label>
            <div class="mt-2">
              <textarea rows="4" name="comment" v-model="stateform.description" id="comment"
                :class="{ 'border-red-500 border-2': v$.description.$errors.length }"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-gray-300 placeholder:text-gray-400 sm:text-sm/6" />
            </div>
          </div>
          <!-- text area end -->
        </form>

      </div>

      <div>
        <UploadImage />
      </div>

      <button @click="enviarDatos" type="submit"
        class="text-white mt-4 bg-elecktranegro hover:bg-elecktraamarillo hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear
        producto nuevo</button>

    </div>
  </div>

</template>

<script setup >
import { ref,computed,onMounted,reactive,watch } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { FwbCheckbox } from 'flowbite-vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { getAllProducts, guardarProducto,EliminarPdfPorUrl,uploadPdf,ismatchName, getMetadataFile } from '../../firebase/index';
import UploadImage from '../components/cmputils/UploadImage.vue'
import { useProductStore } from '../stores/formstore'
import { useUtilStore } from '../stores/utils'

const utilST=useUtilStore()

const prodST=useProductStore()

const stateform=reactive({
  nombre:'',
  marca:'',
  codigo:'',
  medida:'',
  description:'',
})



const check = ref(false)
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



////upload ficha tecnica start
const generateId = () => Date.now().toString(35) + Math.random().toString(36).slice(2)
const handelFileUpload = async (e) => {
    var files = e.target.files[0] 
    const metadata = {
    contentType: e.name,
    file_name:e.name
    };
    //SUBIR UNA ficchatecnica Y PONERLO en el campo FICHA tecnica -- CHANCAR O SETEAR EL CAMPO fichatecnica DE NEW PRODUCT
    console.log(files);
    console.log(e.target.files)
    prodST.setFichaTecnica(await uploadPdf(files,generateId(),metadata))
    prodST.setnewProduct({ 'fichatecnica':prodST.fichatecnica})
    processData()
};
const EliminarPdfPorUrlFn=() => {
    EliminarPdfPorUrl(prodST.fichatecnica)
    prodST.limpiarFichaTecnica()
    prodST.setnewProduct({ 'fichatecnica':prodST.fichatecnica})
    utilST.clearmetadata()  
}
///upload ficha tecnica end



const rules = computed(() => {
    return {
        nombre: {required},
        marca:{required},
        codigo: {required},
        medida: {required},
        description:{required}
      }
})

const v$ = useVuelidate(rules,stateform);


watch([stateform,selected,check],() => {

prodST.setnewProduct({
    'nombre':stateform.nombre,
    'marca':stateform.marca,
    'codigo':stateform.codigo,
    'medida':stateform.medida,
    'fichatecnica':prodST.fichatecnica,
    'description':stateform.description,
    'oferta':check.value,
    'categoria':selected.value,
    'imagenes':prodST.newProduct.imagenes,
})



})


const enviarDatos=() => {
  v$.value.$touch();
  if (!v$.value.$error) {
    if(prodST.newProduct.imagenes.length>0){

      guardarProducto(prodST.newProduct).then(()=>toast.success('Guardado con éxito ', {autoClose: 1000,position:'bottom-right'}))
      prodST.clearnewProduct()
      prodST.limpiarFichaTecnica()
      prodST.clearimagess()
      setTimeout(() => {
        location.reload();
      }, 2000);

    }else{
      toast.error('Agregar imagenes ', {autoClose: 1000,position:'bottom-right'}) 
    }
  

  }else{
     toast.error('llenar los campos  obligatorios ', {autoClose: 1000, position:'bottom-right'});
  }
}

async function processData() {
  if(prodST.fichatecnica!==''){
    const result = await getMetadataFile(prodST.fichatecnica);
    console.log("Resultado:", result); // "Datos obtenidos"
  }
}
processData()

///LLENAR LOS PRODUCTOS AL MONTAR EL COMPONENTE
onMounted(async() => {
  getAllProducts()
  prodST.setnewProduct({ 'fichatecnica':prodST.fichatecnica})
  prodST.setnewProduct({ 'imagenes':prodST.images})
})


// ////////is match name start
// const varmatch=ref(false)
// watch(stateform.nombre,()=>{
//     PromesaGood()
// })
// const PromesaGood=() => {
//     const nuevo = new Promise(res => {
//     res(ismatchName(stateform.nombre))
//     })
//     nuevo.then(
//         resu => varmatch.value=!resu
//     )
//     .catch((err => console.log(err))) 
// }
// ////////is match name end



</script>

<style scoped>

</style>
