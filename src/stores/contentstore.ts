import { defineStore } from "pinia";
import { ref,reactive, type Ref,watch } from "vue";


interface IConfianza{
   title:string,
   description:string,
}
interface IValores{
    title:string,
    description:string,
 }

 interface IContacto{
    telefono:string,
    correo:string,
    facebook:string,
    instagram:string,
    direccion:string,
    urlyoutube:string,
    fechaloferta:string
 }

interface IContenido{
  itemsconfianza:IConfianza[],
  itemsvalores:IValores[],
  mision:string,
  vision:string,
  contacto:IContacto,
}

export const useMainStore = defineStore('main-store-elektra', () => {
    // Estado inicial con tipo IContenido
    const state = reactive<IContenido>({
      itemsconfianza: [],
      mision: '',
      vision:'',
      itemsvalores:[],
      contacto: {
        telefono: '',
        correo:'',
        facebook:'',
        instagram:'',
        direccion:'',
        urlyoutube:'',
        fechaloferta:''
      },
    });

    const setearState=(u:IContenido) => {
      state.itemsconfianza=u.itemsconfianza
      state.itemsvalores=u.itemsvalores
      state.mision=u.mision
      state.vision=u.vision
      state.contacto=u.contacto
    }
  
    // Guardar el estado en localStorage
    const saveToLocalStorage = () => {
      localStorage.setItem('main-elektra-ls', JSON.stringify(state));
    };
  
    // Cargar el estado desde localStorage
    const loadFromLocalStorage = () => {
      const data = localStorage.getItem('main-elektra-ls');
      if (data) {
        Object.assign(state, JSON.parse(data));
      }
    };
  
    // Función para actualizar los campos primitivos
    // const updatePrimitiveField = <K extends keyof Omit<IContenido, 'itemsconfianza' | 'IConfianza'>>(key: K, value: IContenido[K]) => {
    //   state[key] = value;
    //   saveToLocalStorage();
    // };
    const updatePrimitiveField = <K extends keyof Omit<IContenido, 'itemsvalores'| 'IContenido'>>(key: K, value: IContenido[K]) => {
        state[key] = value;
        saveToLocalStorage();
      };

  
    // Función para actualizar el array de itemsconfianza
    const updateitemsconfianza = (newitemsconfianza: IConfianza[]) => {
      state.itemsconfianza = newitemsconfianza;
      saveToLocalStorage();
    };

    // Función para actualizar el array de itemsvalores
    const updateitemsvalores = (newitemsvalores: IValores[]) => {
      state.itemsvalores = newitemsvalores;
      saveToLocalStorage();
    };
  
    // Función para actualizar una propiedad dentro de additionalInfo
    const updateContacto = <K extends keyof IContacto>(key: K, value: IContacto[K]) => {
      state.contacto[key] = value;
      saveToLocalStorage();
    };
  
    // Cargar estado al inicializar
     loadFromLocalStorage();

     watch(state, saveToLocalStorage, { deep: true });
    
    // ///array de valores
    // const groupvalores = ref([] as Array<{}|any|IValores>);
    // function llenargroupValores(itm:IValores){
    //     groupvalores.value = groupvalores.value.concat(itm)
    // }
    // function eliminargroupValores(itm:IValores){
    //     const fiteredValores=groupvalores.value.filter((u)=>u!==itm)
    //     groupvalores.value = fiteredValores
    // }
    // function limpiargroupValores(){
    //     groupvalores.value=[]
    // }


    const groupvalores = ref<IValores[]>(
      JSON.parse(localStorage.getItem('elektravalores') || '[]')
    );
      // Guarda los cambios del estado automáticamente en localStorage
    watch(
      groupvalores,
      (nuevosItems) => {
        localStorage.setItem('elektravalores', JSON.stringify(nuevosItems));
      },
      { deep: true }
    );
      // Getter para obtener todos los elementos
    const obtenerItemsV = () => groupvalores.value;

    // Función para agregar un nuevo elemento
    const agregarItemV = (item: IValores) => {
      groupvalores.value.push(item);
    };

    // Función para eliminar un elemento por IDentidad de objeto
    const eliminarItemV = (title:string) => {
      groupvalores.value = groupvalores.value.filter((item) => item.title!=title);
      updateitemsvalores(groupvalores.value)
    };


    const groupconfianza = ref<IValores[]>(
      JSON.parse(localStorage.getItem('elektraconfianza') || '[]')
    );
      // Guarda los cambios del estado automáticamente en localStorage
    watch(
      groupconfianza,
      (nuevosItems) => {
        localStorage.setItem('elektraconfianza', JSON.stringify(nuevosItems));
      },
      { deep: true }
    );
      // Getter para obtener todos los elementos
    const obtenerItemsC = () => groupconfianza.value;

    // Función para agregar un nuevo elemento
    const agregarItemC = (item: IValores) => {
      groupconfianza.value.push(item);
    };

    // Función para eliminar un elemento por IDentidad de objeto
    const eliminarItemC = (u:IValores) => {
      groupconfianza.value = groupconfianza.value.filter((item) => item!=u);
      updateitemsconfianza(groupconfianza.value)
    };


  
    return {
      state,
      updatePrimitiveField,
      updateitemsconfianza,
      updateitemsvalores,
      updateContacto,

      groupvalores,

      agregarItemV,
      eliminarItemV,
      obtenerItemsV,

      groupconfianza,

      agregarItemC,
      eliminarItemC,
      obtenerItemsC,

      loadFromLocalStorage,

      setearState
    };
  });