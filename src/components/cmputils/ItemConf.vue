<template>
    <div class="w-full pr-2" >
        <input type="text" id="nombre"    v-model="props.title"  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 " placeholder="Titulo" required />
        <textarea id="story" name="story" v-model="props.description"  rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2 mb-6" placeholder="Descripción" ></textarea>
    </div>

</template>

<script setup >

const props=defineProps({
    title:String,
    description:String
})

</script>