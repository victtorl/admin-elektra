import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
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
  const editProduct: Ref<IEdProduct|null> =ref({} as IEdProduct) 
  ///creo qeu solo se va setear
  function setEditProduct(data: IEdProduct) {
    console.log(data);
     editProduct.value = {...editProduct.value, ...data}
  }
  function clearEditProduct() {
    editProduct.value = null;
  }


  const groupProducts = ref([] as Array<{}|any|IProduct>);

  function llenarProductos(itm:IProduct){
      groupProducts.value = groupProducts.value.concat(itm)
  }

  function limpiarProductos(){
      groupProducts.value=[]
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

        images,
        setimages,
        updateAllimages,
        clearimagess,
        deletebycontent,

        editProduct,
        setEditProduct,
        clearEditProduct,
  }
  
})