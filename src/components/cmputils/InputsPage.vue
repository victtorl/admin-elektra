<template>
<form>
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
        <div>
            <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Está en oferta?</label>
            <fwb-checkbox v-model="check" :label="`${check?'SI':'NO'}`" /> 
        </div>   
    </div>
</form>
</template>


<script setup>
import { watch,ref } from 'vue';
import {useProductStore} from '../../stores/formstore'
import { ismatchName } from '../../../firebase';
import { FwbCheckbox } from 'flowbite-vue'


const prodST=useProductStore()

const marca=ref('')
const nombre=ref('')
const codigo=ref()
const medida=ref()
const check = ref(false)


watch([marca,nombre,codigo,medida,check],() => {

    prodST.setnewProduct({
        'marca':marca.value,
        'nombre':nombre.value,
        'codigo':codigo.value,
        'medida':medida.value,
        'oferta':check.value
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