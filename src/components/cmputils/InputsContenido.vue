<template>
    <div>

        <div class="grid grid-cols-1 gap-x-6 font-popi pt-4" >
            <div class="flex flex-col gap-y-4 ">

                   <div class="w-full border-t-2 border-gray-500" ></div>

                    <div class="grid gap-6 mb-6 md:grid-cols-1">

                    <div class="grid md:grid-cols-2 gap-x-4" >
                        <div>
                            <label for="marca" class="block mb-1   text-sm/4 font-semibold text-gray-900 dark:text-white">Misión</label>
                            <textarea id="story" name="story"  v-model="mainST.state.mision" rows="8" cols="33" class="bg-gray-50 border border-gray-300  text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2" placeholder="Descripción Misión" ></textarea>
                        </div>
                        <div>
                            <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Misión</p>
                            <p class=" w-72 prevsm:w-full  py-3 text-sm">{{ mainST.state.mision }}</p>
                        </div>
                    </div>

                    <div class="w-full border-t-2 border-gray-500" ></div>

                    <div class="grid md:grid-cols-2 gap-x-4">
                        <div>
                        <label for="marca" class="block mb-1 text-sm/4 font-semibold text-gray-900 dark:text-white">Visión</label>
                        <textarea id="story" name="story"  v-model="mainST.state.vision" rows="8" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2" placeholder="Descripción Visión" ></textarea>
                        </div>
                        <div>
                            <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Visión</p>
                            <p class="w-72 prevsm:w-full  py-3 text-sm">{{ mainST.state.vision }}</p>
                        </div>
                    </div>

                    <div class="w-full border-t-2 border-gray-500" ></div>

                    <div class="grid md:grid-cols-2 gap-x-4 ">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Valores</label>
                        <input type="text" id="nombre"    v-model="itemvalor.title"  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Titulo" required />
                        <textarea id="story" name="story" v-model="itemvalor.description" rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-4" placeholder="Descripción" ></textarea>
                        <button
                            @click="agregarValor"
                            type="button"
                            class="rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Agregar item valor
                        </button>
                        </div>
                        <div >
                            <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Valores</p>
                            <div class="py-2 md:py-0 md:pt-2 text-sm " v-for="item in mainST.state.itemsvalores" >
                                <div class="flex items-center justify-between w-72 prevsm:w-full">
                                    <p class="mt-3 md:mt-0 text-lg/2 font-semibold text-gray-900 group-hover:text-gray-600" >{{ item.title }} </p>
                                    <div @click="selectItemDeleteV(item)" class="text-xl  cursor-pointer text-red-700 font-bold px-4"> x</div>
                                </div>
                                <p class="leading-4  text-sm/8 text-black w-72 prevsm:w-full" >{{ item.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border-t-2 border-gray-500" ></div>

                    <div class="grid md:grid-cols-2  gap-x-4" >
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">¿Por que confiar en Nosotros?</label>
                        <input type="text" id="nombre"    v-model="itemconfianza.title"  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Titulo" required />
                        <textarea id="story" name="story" v-model="itemconfianza.description"  rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-4" placeholder="Descripción" ></textarea>
                        <button
                            @click="agregarConfianza"
                            type="button"
                            class="rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Agregar item confianza
                        </button>
                        </div>
                        <div class="mt-4 md:mt-0">
                            <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >¿Por que confiar en nosotros?</p>
                            <div class="py-2 md:py-0 md:pt-2 text-sm " v-for="item in mainST.state.itemsconfianza" >
                                <div class="flex items-center justify-between w-72 prevsm:w-full">
                                    <p class="mt-3 md:mt-0 text-lg/2 font-semibold text-gray-900 group-hover:text-gray-600" >{{ item.title }} </p>
                                    <div @click="selectItemDeleteC(item)" class="text-xl  cursor-pointer text-red-700 font-bold px-4"> x</div>
                                </div>
                                <p class="leading-4 text-sm/8 text-black w-72 prevsm:w-full " >{{ item.description }}</p>
                            </div>
                        </div>

                    </div>

                    <div class="w-full border-t-2 border-gray-500" ></div>

                    <div class="grid md:grid-cols-2 mt-6 gap-x-4">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Teléfono</label>
                        <input type="text" id="telefono" v-model="mainST.state.contacto.telefono"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Teléfono" required />
                        </div>

                        <div>
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Teléfono</p>
                        <p class="text-sm  py-3 md:py-4">{{ mainST.state.contacto.telefono }}</p>
                        </div>
                    </div>

        

                    <div class="grid md:grid-cols-2 gap-x-4">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Correo</label>
                        <input type="text" id="correo" v-model="mainST.state.contacto.correo"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Correo" required />
                        </div>

                        <div>
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Correo</p>
                        <p class="text-sm  py-3 md:py-4">{{ mainST.state.contacto.correo }}</p>
                        </div>
                    </div>


                    <div class="grid md:grid-cols-2 gap-x-4">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Facebook</label>
                        <input type="text" id="facebook" v-model="mainST.state.contacto.facebook"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Facebook" required />
                        </div>

                        <div>
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Facebook</p>
                        <p class="text-sm py-3 md:py-4 overflow-x-scroll prevsm:overflow-x-hidden ">{{ mainST.state.contacto.facebook }}</p>
                        </div>
                    </div>



                    <div class="grid md:grid-cols-2 gap-x-4">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Instagram</label>
                        <input type="text" id="instagram" v-model="mainST.state.contacto.instagram"  class="mb-2 overflow-x-scroll bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Instagram" required />
                        </div>

                        <div class="w-72 prevsm:w-full">
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Instagram</p>
                        <p class="text-sm  py-3 md:py-4 overflow-x-scroll prevsm:overflow-x-hidden ">{{ mainST.state.contacto.instagram }}</p>
                        </div>
                    </div>

                    <!-- //direccion -->
                    <div class="grid md:grid-cols-2 gap-x-4">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Direccion</label>
                        <input type="text" id="instagram" v-model="mainST.state.contacto.direccion"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Direcion" required />
                        </div>

                        <div>
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Dirección</p>
                        <p class="text-sm  py-3 md:py-4">{{ mainST.state.contacto.direccion }}</p>
                        </div>
                    </div>

                    <!-- url youtube -->
                    <div class="grid md:grid-cols-2 gap-x-4 ">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">Url Youtube</label>
                        <input type="text" id="Youtube URL" v-model="mainST.state.contacto.urlyoutube"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Youtube URL" required />
                        </div>

                        <div>
                        <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Url Youtube</p>
                        <p class="text-sm  py-3 md:py-4 w-72 prevsm:w-full">{{ mainST.state.contacto.urlyoutube }}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2 " >
                        <div class="">
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha limite de oferta</label>
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <!-- <input datepicker id="default-datepicker"  type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"> -->
                        <input type="date" v-model="selectedDate"   class="text-gray-800">
                        </div>
                        <div>
                            <p class="mt-3 md:mt-0 text-sm/4 font-semibold text-gray-900 group-hover:text-gray-600"  >Fecha seleccionada</p>
                            <p class="text-sm px-2 py-3">{{ formattedDate}}</p>
                            <!-- <p>{{ selectedDate }}</p> -->
                        </div>
                    </div>
                    <button type="button" class="mb-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    @click="saveObjetCloud"    
                    >Guardar todo</button>

                    
                </div>
            </div>

        </div>    
    </div>





        <!-- //init modal -->
        <fwb-modal v-if="isShowModal" @close="closeModal">
            <template #header>
            <div class="flex items-center text-center text-lg">
                {{ itemdelete.data.title}}
            </div>
            </template>
            <template #body>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                ¿Esta seguro que dese eliminar este item de la lista? 
            </p>
            </template>
            <template #footer>
            <div class="flex justify-between">
                <fwb-button @click="closeModal" color="alternative">
                No
                </fwb-button>
                <span @click="closeModal" class="">
                    <fwb-button  v-if="itemdelete.val=='v'" @click="mainST.eliminarItemV(itemdelete.data.title)" color="red">
                        Si eliminar item valor
                    </fwb-button>
                    <fwb-button  v-if="itemdelete.val=='c'" @click="mainST.eliminarItemC(itemdelete.data.title)" color="red">
                        Si eliminar item confianza
                    </fwb-button>
                </span>
            </div>
            </template>
        </fwb-modal>
        <!-- //end modal -->

    </template>
    
    
    <script setup>
    import { initFlowbite } from 'flowbite'
    import { FwbButton, FwbModal } from 'flowbite-vue'
    import { watch,ref,reactive,onMounted,computed } from 'vue';
    import { useMainStore } from '../../stores/contentstore';
    import { cargarContenidoCloud, crearDocumentoContenido, editContenidoxId, } from '../../../firebase';



   
    
    
    const mainST=useMainStore()

    


    const mision=ref()
    const vision=ref()



    const telefono =ref()
    const correo =ref()
    const facebook =ref()
    const instagram =ref()
    const direccion =ref()
    const urlyoutube=ref()
    const fechaselect=ref()


    onMounted(() => {

        cargarContenidoCloud().then(() => {
            // const isoDate = "2024-12-02T00:00:00.000Z";
            // const date = new Date(isoDate);
            selectedDate.value=mainST.state.contacto.fechaloferta.split('T')[0] //al cargar iniciar asi 
            mainST.updateitemsconfianza(mainST.groupconfianza);
            mainST.updateitemsvalores(mainST.groupvalores);
        })
        
        initFlowbite()
    })

    

    const itemvalor=reactive({
        title:'',
        description:''
    })

    const itemconfianza=reactive({
        title:'',
        description:''
    })
    
    function agregarValor(){
      
        mainST.agregarItemV({title:itemvalor.title,description:itemvalor.description})
        mainST.updateitemsvalores(mainST.groupvalores);
        itemvalor.title=''
        itemvalor.description=''
    }

    function agregarConfianza(){
        mainST.agregarItemC({title:itemconfianza.title,description:itemconfianza.description})
        mainST.updateitemsconfianza(mainST.groupconfianza)
        itemconfianza.title=''
        itemconfianza.description=''
    }

    const selectedDate = ref("");
      // Computed para formatear la fecha en ISO
      const formattedDate = computed(() => {
      if (!selectedDate.value) return ""; // Maneja el caso de un input vacío
      const date = new Date(selectedDate.value);
      mainST.updateContacto('fechaloferta',date.toISOString())
      return date.toISOString(); // Convierte la fecha al formato ISO
    });

    
    watch([
        mainST.state.mision,
        mainST.state.vision,

        mainST.state.contacto.telefono,
        mainST.state.contacto.correo,
        mainST.state.contacto.facebook,
        mainST.state.contacto.instagram,
        mainST.state.contacto.direccion,
        mainST.state.contacto.urlyoutube,

        mainST.state.itemsvalores,
        mainST.state.itemsconfianza,
        fechaselect.value
    ],() => {
    
    mainST.updatePrimitiveField('mision',mision.value)
    mainST.updatePrimitiveField('vision',vision.value)

    mainST.updateContacto('telefono', telefono.value);
    mainST.updateContacto('correo', correo.value);
    mainST.updateContacto('facebook', facebook.value);
    mainST.updateContacto('instagram', instagram.value);
    mainST.updateContacto('direccion', direccion.value);
    mainST.updateContacto('urlyoutube', urlyoutube.value);
    mainST.updateContacto('fechaloferta',new Date(fechaselect.value).toISOString())



    mainST.updateitemsvalores(mainST.groupvalores)
    mainST.updateitemsconfianza(mainST.groupconfianza)

    console.log('HOla comoestas');
    
        
    })


    const saveObjetCloud=() => {
        // crearDocumentoContenido(mainST.state) para que crear si ya un documento nosma se usara
        editContenidoxId(mainST.state)  
    }
    



    //modal
    const itemdelete=ref()
    const isShowModal = ref(false)
    function closeModal () {
    isShowModal.value = false
    }
    function showModal () {
    isShowModal.value = true
    }
    const selectItemDeleteV=(itmselect) => {
    showModal()
    itemdelete.value={
        data:itmselect,
        val:'v'
    }
    }
    const selectItemDeleteC=(itmselect) => {
    showModal()
    itemdelete.value={
        data:itmselect,
        val:'c'
    }
    }
    
    
    </script>