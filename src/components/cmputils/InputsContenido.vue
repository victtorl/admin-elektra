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

                     <!-- inputs valores start -->
                     <div class="grid md:grid-cols-1  gap-x-4" >
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">¿Por que confiar en Nosotros?</label>
                            <div v-for="item in mainST.groupvalores" class="flex " >
                                <div class="w-full pr-2" >
                                    <input type="text" id="nombre"    v-model="item.title"  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 " placeholder="Titulo" required />
                                    <textarea id="story" name="story" v-model="item.description"  rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2 mb-6" placeholder="Descripción" ></textarea>
                                </div>
                             <svg @click="mainST.eliminarItemV(item)"  height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#F4B2B0;" points="178.652,462.067 110.276,462.067 82.918,106.177 178.652,106.177 "></polygon> <path style="fill:#B3404A;" d="M311.198,70.475c-8.484,0-15.365-6.88-15.365-15.365V30.73H189.232V55.11 c0,8.484-6.88,15.365-15.365,15.365s-15.365-6.88-15.365-15.365V15.365C158.503,6.88,165.383,0,173.867,0h137.331 c8.484,0,15.365,6.88,15.365,15.365V55.11C326.563,63.596,319.684,70.475,311.198,70.475z"></path> <path style="fill:#F4B2B0;" d="M380.052,319.948l16.391-213.769H300.71v267.369C313.965,342.592,344.435,320.72,380.052,319.948z"></path> <g> <path style="fill:#B3404A;" d="M470.304,392.923c-8.484,0-15.365,6.88-15.365,15.365c0,40.242-32.741,72.983-72.983,72.983 c-40.243,0-72.984-32.741-72.984-72.983c0-34.479,24.522-63.845,57.028-71.208c0.011-0.002,0.02-0.005,0.031-0.006 c2.303-0.521,4.645-0.93,7.022-1.223c0.048-0.006,0.095-0.011,0.143-0.017c1.119-0.135,2.245-0.244,3.377-0.329 c0.081-0.006,0.164-0.014,0.246-0.018c1.183-0.083,2.374-0.14,3.571-0.166c8.077-0.171,14.554-6.544,15.005-14.475l15.282-199.302 h26.991c8.484,0,15.365-6.88,15.365-15.365s-6.88-15.365-15.365-15.365h-41.224h-95.735H178.652H82.918H41.695 c-8.484,0-15.365,6.88-15.365,15.365s6.88,15.365,15.365,15.365h26.994l26.268,341.704c0.615,8.005,7.291,14.186,15.32,14.186 h68.376h47.866c8.484,0,15.365-6.88,15.365-15.365c0-8.484-6.88-15.365-15.365-15.365h-32.501V121.542h91.327v248.965 c-4.648,11.891-7.103,24.653-7.103,37.779c0,57.188,46.526,103.712,103.714,103.712s103.712-46.525,103.712-103.712 C485.669,399.802,478.788,392.923,470.304,392.923z M316.075,121.542h63.782l-14.131,184.302c-0.069,0.011-0.137,0.026-0.206,0.035 c-0.931,0.147-1.856,0.32-2.781,0.492c-0.273,0.052-0.545,0.103-0.817,0.158c-16.835,3.283-32.529,10.675-45.846,21.666V121.542 H316.075z M163.287,446.703h-38.782L99.509,121.542h63.779v325.161H163.287z"></path> <path style="fill:#B3404A;" d="M403.685,408.297l7.968-7.968c6-6,6-15.729,0-21.73c-6.001-5.998-15.727-5.998-21.73,0l-7.968,7.968 l-7.968-7.968c-5.998-5.995-15.724-5.998-21.73,0c-6,6-6,15.729,0,21.73l7.968,7.968l-7.968,7.968c-6,6-6,15.729,0,21.73 c3.001,2.999,6.933,4.5,10.864,4.5c3.932,0,7.864-1.501,10.864-4.5l7.968-7.968l7.968,7.968c3.001,2.999,6.933,4.5,10.864,4.5 c3.932,0,7.864-1.501,10.864-4.5c6-6,6-15.729,0-21.73L403.685,408.297z"></path> </g> </g></svg>
                            </div>    
                        <button
                            @click="agregarValor"
                            type="button"
                            class="rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Agregar item Valor
                        </button>
                        </div>
                       
                    </div>
                    <!-- inputs valores end -->

                    <div class="w-full border-t-2 border-gray-500" ></div>
                   
                    <!-- inputs confianza start -->
                    <div class="grid md:grid-cols-1  gap-x-4" >
                        <div>
                        <label for="nombre" class="block mb-2 text-sm/4 font-semibold text-gray-900 dark:text-white">¿Por que confiar en Nosotros?</label>
                            <div v-for="item in mainST.groupconfianza" class="flex " >
                                <div class="w-full pr-2" >
                                    <input type="text" id="nombre"    v-model="item.title"  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 " placeholder="Titulo" required />
                                    <textarea id="story" name="story" v-model="item.description"  rows="3" cols="33" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  block w-72 prevsm:w-full p-2.5 border-transparent focus:border-transparent focus:ring-0 mt-2 mb-6" placeholder="Descripción" ></textarea>
                                </div>
                             <svg @click="mainST.eliminarItemC(item)"  height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#F4B2B0;" points="178.652,462.067 110.276,462.067 82.918,106.177 178.652,106.177 "></polygon> <path style="fill:#B3404A;" d="M311.198,70.475c-8.484,0-15.365-6.88-15.365-15.365V30.73H189.232V55.11 c0,8.484-6.88,15.365-15.365,15.365s-15.365-6.88-15.365-15.365V15.365C158.503,6.88,165.383,0,173.867,0h137.331 c8.484,0,15.365,6.88,15.365,15.365V55.11C326.563,63.596,319.684,70.475,311.198,70.475z"></path> <path style="fill:#F4B2B0;" d="M380.052,319.948l16.391-213.769H300.71v267.369C313.965,342.592,344.435,320.72,380.052,319.948z"></path> <g> <path style="fill:#B3404A;" d="M470.304,392.923c-8.484,0-15.365,6.88-15.365,15.365c0,40.242-32.741,72.983-72.983,72.983 c-40.243,0-72.984-32.741-72.984-72.983c0-34.479,24.522-63.845,57.028-71.208c0.011-0.002,0.02-0.005,0.031-0.006 c2.303-0.521,4.645-0.93,7.022-1.223c0.048-0.006,0.095-0.011,0.143-0.017c1.119-0.135,2.245-0.244,3.377-0.329 c0.081-0.006,0.164-0.014,0.246-0.018c1.183-0.083,2.374-0.14,3.571-0.166c8.077-0.171,14.554-6.544,15.005-14.475l15.282-199.302 h26.991c8.484,0,15.365-6.88,15.365-15.365s-6.88-15.365-15.365-15.365h-41.224h-95.735H178.652H82.918H41.695 c-8.484,0-15.365,6.88-15.365,15.365s6.88,15.365,15.365,15.365h26.994l26.268,341.704c0.615,8.005,7.291,14.186,15.32,14.186 h68.376h47.866c8.484,0,15.365-6.88,15.365-15.365c0-8.484-6.88-15.365-15.365-15.365h-32.501V121.542h91.327v248.965 c-4.648,11.891-7.103,24.653-7.103,37.779c0,57.188,46.526,103.712,103.714,103.712s103.712-46.525,103.712-103.712 C485.669,399.802,478.788,392.923,470.304,392.923z M316.075,121.542h63.782l-14.131,184.302c-0.069,0.011-0.137,0.026-0.206,0.035 c-0.931,0.147-1.856,0.32-2.781,0.492c-0.273,0.052-0.545,0.103-0.817,0.158c-16.835,3.283-32.529,10.675-45.846,21.666V121.542 H316.075z M163.287,446.703h-38.782L99.509,121.542h63.779v325.161H163.287z"></path> <path style="fill:#B3404A;" d="M403.685,408.297l7.968-7.968c6-6,6-15.729,0-21.73c-6.001-5.998-15.727-5.998-21.73,0l-7.968,7.968 l-7.968-7.968c-5.998-5.995-15.724-5.998-21.73,0c-6,6-6,15.729,0,21.73l7.968,7.968l-7.968,7.968c-6,6-6,15.729,0,21.73 c3.001,2.999,6.933,4.5,10.864,4.5c3.932,0,7.864-1.501,10.864-4.5l7.968-7.968l7.968,7.968c3.001,2.999,6.933,4.5,10.864,4.5 c3.932,0,7.864-1.501,10.864-4.5c6-6,6-15.729,0-21.73L403.685,408.297z"></path> </g> </g></svg>
                            </div>    
                        <button
                            @click="agregarConfianza"
                            type="button"
                            class="rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Agregar item confianza
                        </button>
                        </div>
                       
                    </div>
                    <!-- inputs confianza end -->


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
    import ItemConf from './ItemConf.vue';



   
    
    
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
            mainST.updateitemsconfianza(mainST.groupconfianza); //para el state que contiene tambien confnz en su interior
            mainST.updateitemsvalores(mainST.groupvalores);     //para el state que contin tambien valores en su interior
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