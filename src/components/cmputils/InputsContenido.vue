<template>
    <div>

        <div class="grid grid-cols-1 gap-x-6" >
            <div class="flex flex-col gap-y-4">

                <div class="grid gap-6 mb-6 md:grid-cols-1">

                    <div class="grid md:grid-cols-2 gap-x-2" >
                        <div>
                            <label for="marca" class="block mb-1  text-sm font-medium text-gray-900 dark:text-white">Misión</label>
                            <textarea id="story" name="story"  v-model="mainST.state.mision" rows="8" cols="33" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2" placeholder="Descripción Misión" ></textarea>
                        </div>
                        <div>
                            <p>Mision</p>
                            <p class="w-full px-2 py-3 text-sm">-{{ mainST.state.mision }}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="marca" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Visión</label>
                        <textarea id="story" name="story"  v-model="mainST.state.vision" rows="8" cols="33" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2" placeholder="Descripción Visión" ></textarea>
                        </div>
                        <div>
                            <p>Vision</p>
                            <p class="w-full px-2 py-3 text-sm">-{{ mainST.state.vision }}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valores</label>
                        <input type="text" id="nombre"    v-model="itemvalor.title"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Titulo" required />
                        <textarea id="story" name="story" v-model="itemvalor.description" rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-4" placeholder="Descripción" ></textarea>
                        <button class="w-full bg-green-400 cursor-pointer" @click="agregarValor" >Agregar item valor</button>
                        </div>
                        <div >
                            <p>Valores</p>
                            <div class="py-1 px-2 text-sm" v-for="item in mainST.state.itemsvalores" >
                                <p>{{ item.title }}   <div @click="mainST.eliminarItemV(item.title)" class="font-3xl cursor-pointer text-red-500 font-bold px-4"> x</div> </p>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2" >
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Por que confiar en Nosotros?</label>
                        <input type="text" id="nombre"    v-model="itemconfianza.title"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Titulo" required />
                        <textarea id="story" name="story" v-model="itemconfianza.description"  rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-4" placeholder="Descripción" ></textarea>
                        <button class="w-full bg-green-400" @click="agregarConfianza" >Agregar item confianza</button>
                        </div>
                        <div>
                            <p>¿Por que confiar en nosotros?</p>
                            <div class="py-2 text-sm px-2" v-for="item in mainST.state.itemsconfianza" >
                                <div class="flex items-center justify-between w-full">
                                    <p class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600" >{{ item.title }} </p>
                                    <div @click="mainST.eliminarItemC(item.title)" class="text-xl  cursor-pointer text-red-700 font-bold px-4"> x</div>
                                </div>
                                <p class="line-clamp-3 text-sm/6 text-gray-600" >{{ item.description }}</p>
                            </div>
                        </div>

                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                        <input type="text" id="telefono" v-model="mainST.state.contacto.telefono"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Teléfono" required />
                        </div>

                        <div>
                        <p>Telefono</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.telefono }}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                        <input type="text" id="correo" v-model="mainST.state.contacto.correo"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Correo" required />
                        </div>

                        <div>
                        <p>Correo</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.correo }}</p>
                        </div>
                    </div>


                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
                        <input type="text" id="facebook" v-model="mainST.state.contacto.facebook"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Facebook" required />
                        </div>

                        <div>
                        <p>Facebook</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.facebook }}</p>
                        </div>
                    </div>



                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram</label>
                        <input type="text" id="instagram" v-model="mainST.state.contacto.instagram"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Instagram" required />
                        </div>

                        <div>
                        <p>Instagram</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.instagram }}</p>
                        </div>
                    </div>

                    <!-- //direccion -->
                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                        <input type="text" id="instagram" v-model="mainST.state.contacto.direccion"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Direcion" required />
                        </div>

                        <div>
                        <p>Direccion</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.direccion }}</p>
                        </div>
                    </div>

                    <!-- url youtube -->
                    <div class="grid md:grid-cols-2 gap-x-2">
                        <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url Youtube</label>
                        <input type="text" id="Youtube URL" v-model="mainST.state.contacto.urlyoutube"  class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-transparent focus:border-transparent focus:ring-0" placeholder="Youtube URL" required />
                        </div>

                        <div>
                        <p>Url youtube</p>
                        <p class="text-sm px-2 py-3">{{ mainST.state.contacto.urlyoutube }}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-x-2 pb-96" >
                        <div class="">
                        <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha limite de oferta</label>
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <!-- <input datepicker id="default-datepicker"  type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"> -->
                        <input type="date" name="bday"  v-model="fechaselect"/>
                        </div>
                        <div>
                            <p>Fecha Seleccionada</p>
                            <p class="text-sm px-2 py-3">{{ fechaselect}}</p>
                        </div>
                    </div>
                    <button type="button" class="mb-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    @click="saveObjetCloud"    
                    >Guardar</button>

                    
                </div>
            </div>

        </div>    
    </div>
    </template>
    
    
    <script setup>
    import { initFlowbite } from 'flowbite'
    import { watch,ref,reactive,onMounted } from 'vue';
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
            fechaselect.value=mainST.state.contacto.fechaloferta.split('T')[0]
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
        fechaselect.value,
    ],() => {
    
    mainST.updatePrimitiveField('mision',mision.value)
    mainST.updatePrimitiveField('vision',vision.value)

    mainST.updateContacto('telefono', telefono.value);
    mainST.updateContacto('correo', correo.value);
    mainST.updateContacto('facebook', facebook.value);
    mainST.updateContacto('instagram', instagram.value);
    mainST.updateContacto('direccion', direccion.value);
    mainST.updateContacto('urlyoutube', urlyoutube.value);
    mainST.updateContacto('fechaloferta',(new Date(fechaselect.value)).toISOString())



    mainST.updateitemsvalores(mainST.groupvalores)
    mainST.updateitemsconfianza(mainST.groupconfianza)


        
    })


    const saveObjetCloud=() => {
        // crearDocumentoContenido(mainST.state) para que crear si ya un documento nosma se usara
        editContenidoxId(mainST.state)  
    }
    

    
    
    </script>