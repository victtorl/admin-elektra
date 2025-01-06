<template>
    <div class="relative ml-8 w-full max-w-md mx-auto">
      <!-- Search Input -->
      <div class="w-auto  lg:mx-0 lg:w-full relative flex items-center" @click="gestionApertura">
            <div class="absolute  left-3 flex ">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.5 3.7616C6.77208 3.7616 3.75 6.78367 3.75 10.5116C3.75 14.2395 6.77208 17.2616 10.5 17.2616C12.3642 17.2616 14.0506 16.5069 15.273 15.2846C16.4953 14.0622 17.25 12.3758 17.25 10.5116C17.25 6.78367 14.2279 3.7616 10.5 3.7616ZM2.25 10.5116C2.25 5.95525 5.94365 2.2616 10.5 2.2616C15.0563 2.2616 18.75 5.95525 18.75 10.5116C18.75 12.5194 18.032 14.3607 16.8399 15.7909L21.5303 20.4813C21.8232 20.7742 21.8232 21.249 21.5303 21.5419C21.2374 21.8348 20.7626 21.8348 20.4697 21.5419L15.7793 16.8515C14.3491 18.0436 12.5078 18.7616 10.5 18.7616C5.94365 18.7616 2.25 15.0679 2.25 10.5116Z"
                        fill="#0F172A" />
                </svg>
            </div>

            <input 
            type="text"
            v-model="searchQuery"
            @focus="showResults = true"
            @input="filterResults"
            placeholder="Buscar..."
            class="block w-full rounded-full border-0 py-1.5 lg:py-2.5 lg:pr-24 text-gray-700 font-normal shadow-sm ring-1 ring-inset pl-12 ring-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:ring-1 border-none outline-none 0 font-lato sm:text-sm sm:leading-6" />

        </div>
  
      <!-- Dropdown Results -->
      <div
        v-if="showResults && filteredItems.length > 0"
        class="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto"
      >
        <ul>
          <li
            v-for="(result, index) in filteredItems"
            :key="index"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            @click="selectResult(result)"
          >
            {{ result.data.nombre }}
          </li>
        </ul>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref, onMounted,computed } from 'vue';
import { useProductStore } from '../../stores/formstore';
import { useRoute, useRouter } from 'vue-router'

  const prodST=useProductStore()
  
  const data = ref(prodST.groupProducts)

  const searchQuery = ref('');
  const filteredResults = ref([]);
  const showResults = ref(false);
  


  const filteredItems = computed(() => {
  if(searchQuery.value == ''){
    return prodST.groupProductsSearch.slice(0,2)
  }else{
    // console.log(prodST.groupProductsSearch.filter((item) =>item.data.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())));
    return prodST.groupProductsSearch.filter((item) =>item.data.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }
});
  
  // Seleccionar un resultado
  const selectResult = (result) => {
    window.open(`/editar-producto/${result.id}`,'_self')
    const prodST = useProductStore()
    const aux = prodST.groupProductsSearch.filter(u => u.id == result.id)
    prodST.setEditProduct(aux[0])
    prodST.clearimagessEd()
    prodST.setimagesEd(aux[0].data.imagenes)
    showResults.value = false;

  };
  
  // Cerrar dropdown al hacer clic fuera
  const closeDropdown = (e) => {
    if (!e.target.closest('.relative')) {
      showResults.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('click', closeDropdown);
  });
  
  </script>
  
  <style scoped>
  /* Personalización de scrollbar para el dropdown */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }
  </style>