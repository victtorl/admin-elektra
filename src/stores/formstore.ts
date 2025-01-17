import { defineStore } from "pinia";
import { watch,ref, type Ref } from "vue";
import {useStorage} from "@vueuse/core";
import { looseIndexOf } from '@vue/shared';

interface Iimages{
   imagenes:string
}

interface IProduct{
  nombre:string,
  marca:string,
  codigo:string
  medida:string,
  imagenes:Iimages[],
  oferta:boolean,
  categoria:string,
  description:string,
  fichatecnica:string
}



interface IEdProduct{
id:string,
data:IProduct
}



export const useProductStore=defineStore("products-store",() => {
 

  const productstore: Ref<IProduct[]> = ref(useStorage('products-store-ls', null, undefined, {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v)
    }
  }));


  function addProduct(itm:IProduct){
    if(productstore.value!=undefined){
      productstore.value = productstore.value.concat(itm)
    }else{
      productstore.value=[itm]
    }
        
  }
  function deleteProduct(index: number) {  
    if(productstore.value){
      const newArr= productstore.value.filter((u:any)=>looseIndexOf(productstore.value,u)!=index)
      productstore.value=newArr
    }
  }


  //Store para registrar un producto nuevo
  const newProduct: Ref<IProduct|null> =ref({} as IProduct) 
  
  ///creo qeu solo se va setear
  function setnewProduct(data: IProduct) {
    newProduct.value = {...newProduct.value, ...data}
  }
  
  function clearnewProduct() {
    newProduct.value = null;
  }


  //Store para editar un producto
  // const editProduct: Ref<IEdProduct|null> =ref({} as IEdProduct) ////DEBERIA IR EN LS


  // Inicializa editProduct desde localStorage si existe
const editProduct: Ref<IEdProduct | null> = ref(
  localStorage.getItem('editProductElektra')
    ? JSON.parse(localStorage.getItem('editProductElektra') as string)
    : null
);

  ///creo qeu solo se va setear
  function setEditProduct(data: IEdProduct) {
    console.log(data);
     editProduct.value = {...editProduct.value, ...data}
  }
  function clearEditProduct() {
    editProduct.value = null;
  }
  // Observa los cambios en editProduct y actualiza localStorage
watch(editProduct, (newValue) => {
  if (newValue) {
    localStorage.setItem('editProductElektra', JSON.stringify(newValue));
  } else {
    localStorage.removeItem('editProductElektra');
  }
}, { deep: true });





  const groupProducts = ref([] as Array<{}|any|IProduct>);

  function llenarProductos(itm:IProduct){
      groupProducts.value = groupProducts.value.concat(itm)
  }

  function limpiarProductos(){
      groupProducts.value=[]
  }


  const groupProductsSearch = ref([] as Array<{}|any|IProduct>);
  function llenarProductosSearch(itm:IProduct){
      groupProductsSearch.value = groupProductsSearch.value.concat(itm)
  }
  function limpiarProductosSearch(){
      groupProductsSearch.value=[]
  }


  const images = ref<string[]>(loadImagesFromLocalStorage());
  function setimages(data: any) {
       images.value = images.value.concat(data);
       saveImagesToLocalStorage()
   }
   function filterimages(data: number) {
    const newArr= images.value.filter(u=>looseIndexOf(images.value,u)!=data)
    images.value=newArr
   }
   function deletebycontent(data: any) { // data puede ser cualquier contenido pero en este caso usaremos urls 
    const newArr= images.value.filter(u=>u!=data)
    images.value=newArr
    saveImagesToLocalStorage()
   }
   function updateAllimages(data:any){
    images.value=data
    saveImagesToLocalStorage()
   }
   function clearimagess() {
   images.value =[]
   saveImagesToLocalStorage()
   }
  // Función para cargar imágenes desde localStorage
  function loadImagesFromLocalStorage(): string[] {
    const storedImages = localStorage.getItem('images-elektra');
    return storedImages ? JSON.parse(storedImages) : [];
  }
  // Función para sincronizar imágenes en localStorage
  function saveImagesToLocalStorage() {
    localStorage.setItem('images-elektra', JSON.stringify(images.value));
  }

  const imagesEd = ref<string[]>(loadImagesFromLocalStorageEd());
  function setimagesEd(data: any) {
       imagesEd.value = imagesEd.value.concat(data);
       saveImagesToLocalStorageEd()
   }
   function filterimagesEd(data: number) {
    const newArr= imagesEd.value.filter(u=>looseIndexOf(imagesEd.value,u)!=data)
    imagesEd.value=newArr
   }
   function deletebycontentEd(data: any) { // data puede ser cualquier contenido pero en este caso usaremos urls 
    const newArr= imagesEd.value.filter(u=>u!=data)
    imagesEd.value=newArr
    saveImagesToLocalStorageEd()
   }
   function updateAllimagesEd(data:any){
    imagesEd.value=data
    saveImagesToLocalStorageEd()
   }
   function clearimagessEd() {
   imagesEd.value =[]
   saveImagesToLocalStorageEd()
   }
  // Función para cargar imágenes desde localStorage
  function loadImagesFromLocalStorageEd(): string[] {
    const storedImages = localStorage.getItem('images-elektraEd');
    return storedImages ? JSON.parse(storedImages) : [];
  }
  // Función para sincronizar imágenes en localStorage
  function saveImagesToLocalStorageEd() {
    localStorage.setItem('images-elektraEd', JSON.stringify(imagesEd.value));
  }
  

  //FICHA TECNICA
  const fichatecnica=ref<string>(cargarFichaLocalStorage());
  function setFichaTecnica(data:any){
    fichatecnica.value=data
    guardarFichaLocalStorage()
   }
   function limpiarFichaTecnica(){
    fichatecnica.value=''
    guardarFichaLocalStorage()
   }

  function cargarFichaLocalStorage(): string {
    const storeFicha = localStorage.getItem('elektra-ficha');
    return storeFicha ? JSON.parse(storeFicha) : '';
  }
  function guardarFichaLocalStorage() {
    localStorage.setItem('elektra-ficha', JSON.stringify(fichatecnica.value));
  }

  return {
        productstore,
        addProduct,
        deleteProduct,

        newProduct,
        setnewProduct,
        clearnewProduct,

        groupProducts,
        llenarProductos,
        limpiarProductos,

        groupProductsSearch,
        llenarProductosSearch,
        limpiarProductosSearch,


        images,
        setimages,
        updateAllimages,
        clearimagess,
        deletebycontent,

        imagesEd,
        setimagesEd,
        updateAllimagesEd,
        clearimagessEd,
        deletebycontentEd,

        editProduct,
        setEditProduct,
        clearEditProduct,

        fichatecnica,
        setFichaTecnica,
        limpiarFichaTecnica
  }
  
})