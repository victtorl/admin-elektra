<template>

  <div class="w-full h-full   p-6">
      <p class="mb-2 bg-elecktranegro text-elecktraamarillo font-semibold rounded-lg text-center py-1 ">GESTIONAR CONTENIDO WEB</p>
      <!-- <div class="grid grid-cols-2 gap-x-6" >
        <div class="flex flex-col gap-y-4">
          <InputsContenido />
        </div>

        <button @click="enviarDatos" type="submit" class="text-white mt-4 w-16 h-12 bg-elecktranegro hover:bg-elecktraamarillo hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear producto nuevo</button>
      </div> -->
      <InputsContenido/>
  </div>

</template>

<script setup>
import { ref,computed,onMounted } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import InputsContenido from '../components/cmputils/InputsContenido.vue'

import { getAllProducts, guardarProducto, } from '../../firebase/index';
import { useMainStore } from '../stores/contentstore'


const mainST=useMainStore()

const nombre =ref('')
const marca=ref('')
const codigo =ref('')
const medida =ref('')
const imagenes=ref([])




const rules = computed(() => {
    return {
        nombre: {required},
        marca:{required},
        codigo: {required},
        medida: {required},
        imagenes: {required}
      }
})

const v$ = useVuelidate(rules, {nombre,marca,codigo,medida,imagenes});





const enviarDatos=() => {
  // nombre.value=prodST.newProduct.nombre
  // marca.value=prodST.newProduct.marca
  // codigo.value=prodST.newProduct.codigo
  // medida.value=prodST.newProduct.medida
  // imagenes.value=prodST.newProduct.imagenes
  // oferta.value=prodST.newProduct.oferta

  // v$.value.$touch();
  // if (!v$.value.$error) {
  //   console.log('no hay errores');  
  //     guardarProducto(prodST.newProduct).then(()=>alert('Producto agregado'))
  //     prodST.clearimagess()
  //     prodST.clearnewProduct()
  //     setTimeout(() => {
  //       location.reload();
  //     }, 2000);
  // }else{
  //   alert('llenar todos los campos o cargar las imagenes');  
  // }
}


///LLENAR LOS PRODUCTOS AL MONTAR EL COMPONENTE
onMounted(() => {
  getAllProducts()
})



</script>

<style scoped>

</style>
