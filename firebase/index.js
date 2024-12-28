// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { deleteDoc, getFirestore } from "firebase/firestore";
import { getDocs, collection, addDoc, doc, setDoc,  } from "firebase/firestore";
import { getAuth } from "firebase/auth"

import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata,deleteObject } from "firebase/storage";
///pinia

 import { useProductStore } from "../src/stores/formstore"; 
import { useMainStore } from "../src/stores/contentstore";
import { useUtilStore } from "../src/stores/utils";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwGu0nt3t5I_4wGCRL3NXaeOUytX-1ASU",
    authDomain: "peloterosfc-c496a.firebaseapp.com",
    databaseURL: "https://peloterosfc-c496a.firebaseio.com",
    projectId: "peloterosfc-c496a",
    storageBucket: "peloterosfc-c496a.appspot.com",
    messagingSenderId: "864437364837",
    appId: "1:864437364837:web:0f5636a079823f820d3e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app)



export {
    db, auth
}


// export const getAllPosts = async () => {
//     const teamsST = useTeamStore()
//     teamsST.clearteamItem()//limpia previa
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     querySnapshot.forEach((doc) => {
//         teamsST.llenarteamsfire({ id: doc.id, data: doc.data() })
//     });

//     return teamsST.teamsfirebase
// }


// export const guardarPost = async (data) => {
  
//     try {

//         if (await ismatchName(data.name_team)) {
//             console.log(data.name_team);
//             const docRef = await addDoc(collection(db, 'elektra-web'), data);
//             console.log("Document written with ID: ", docRef);
//             getAllTeams() //para tener en un store los equipos que agregamos
//             alert('post agregado')
//             figuraST.cleargroupfiguras()
//             tendenciaST.cleargrouptendencias()
//         } else {
//             alert('hay un post con ese nombre registrsdo')
//         }

//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// };


export const guardarProducto= async (data) => {
  
  try {
  
    const docRef = await addDoc(collection(db, 'elektra-web'), data);
    console.log("Document written with ID: ", docRef);


  } catch (e) {
      console.error("Error adding document: ", e);
  }
};




// buscar si ya se creo un documento con un nombre
// export const ismatchName = async (nombre) => {
//     const teamsST = useTeamStore()
//     const figuraST = usePostStore()
//     const tendenciaST = useTendenciaStore()
//     if (teamsST.teamsfirebase.length >= 1) {
//         console.log(teamsST.teamsfirebase);
//         const elem = teamsST.teamsfirebase.map((u) => { return u.data })
//         console.log(elem);
//         const filtrado = elem.filter((u) => u.name_team == nombre)
//         console.log(filtrado);

//         const getIDdoc = teamsST.teamsfirebase.map((u) => { return u })
//         const filterArrcontentID = getIDdoc.filter((u) => u.data.name_team == nombre)
//         filterArrcontentID.length >= 1 ? teamsST.setidDocumentUtil(filterArrcontentID[0].id) : console.log('no existe doc por lo tanto no hay id');


//         //como tenemos el elemento identificado lo ponemos al store edit
//         if (filtrado.length >= 1) {
//             figuraST.setgroupfiguraedit(filtrado[0].figure_good_moment)
//             tendenciaST.setitemgrouptendenciaedit(filtrado[0].trend_evidently)
//         }
//         console.log('tamaño');
//         console.log(filtrado.length);
//         if (filtrado.length > 0) {
//             return false
//         } else {
//             return true
//         }
//     }

// }

// Editar o agregar un campo si no esxiste por id
// export const editPostxId = async (id, data) => {
//     const postRef = doc(db, "posts", id);
//     await setDoc(postRef, data);
//     setDoc(postRef, data)
//         .then(postRef => {
//             console.log("Entire Document has been updated successfully");
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }





//Upload image
export const uploadImage = async (file,id) => {
    const storage = getStorage();
    const ImagesRef = ref(storage, `elektra-web/${id}`)
  
    return uploadBytes(ImagesRef, file)
      .then(snapshot => {
        return getDownloadURL(snapshot.ref)
      })
      .then(downloadURL => {
        console.log('Download URL', downloadURL)
        return downloadURL
      })
  }

//Upload image
export const uploadPdf = async (file,id) => {
  const storage = getStorage();
  const PdfRef = ref(storage, `elektra-web-fichas/${id}`)

  return uploadBytes(PdfRef, file)
    .then(snapshot => {
      return getDownloadURL(snapshot.ref)
    })
    .then(downloadURL => {
      console.log('Download URL', downloadURL)
      return downloadURL
    })
}


export const EliminarPdfPorUrl= (urlpdf) => {
  const storage=getStorage()
  const pdfRef = ref(storage, urlpdf)
  deleteObject(pdfRef).then(() =>console.log('archivo eliminado'))
  .catch((error) =>console.log("Failed to delete image: ", error))
}
  
  // Obtener todos las urls de las imagenes
  export const getAllLinksImagesStoragexNameProd = (name) => {
   // Create a reference under which you want to list
    const storage = getStorage();
    const listRef = ref(storage, `elektra-web/${name}`);
    const prodST=useProductStore()

    let auxLIkns=[]
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          console.log(folderRef);
          
        });
        res.items.forEach(async(itemRef) => {
          // All the items under listRef.
          // console.log(await getDownloadURL(itemRef));
          auxLIkns.concat(await getDownloadURL(itemRef))
        });
        console.log(auxLIkns);
        

      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
  }
  

//Obtener todos las urls ACTUALIZADAS de las imagenes con nombre 
export const getAllLinksImagesStorage = async(name) => {
  const prodST=useProductStore()
  const storage = getStorage();
  let arrayimages = []
  const ImagesRefs = ref(storage, `elektra-web/${name}`)
  listAll(ImagesRefs).then((res) => {
    res.items.map((u, i) => {
      getDownloadURL(u).then((urlimage) => {
        arrayimages.splice(i, 0, urlimage)
         prodST.setnewProduct({
          'imagenes':arrayimages
          })
      })
    })
  })
}




export const listarArchivos = async(name) => {

  const storage = getStorage();
  let arrayimages = []
  // Create a reference under which you want to list
  const listRef = ref(storage, `elektra-web/${name}`);
  
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef,i) => {
        // All the items under listRef.
        console.log(itemRef.fullPath,i);
        
          // const refeimagenSpecific=ref(storage,itemRef.fullPath+'.webp')
          // deleteObject(refeimagenSpecific).then(() => {
          //   // File deleted successfully
          //   console.log('eLMINADO CON EXITO');
          // }).catch((error) => {
          //   // Uh-oh, an error occurred!
          // });
        
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
}


// //Obtener todos las urls de las imagenes por nombre de producto 
// export const GetURLsImagenesByName = async(name) => {
//   const prodST=useProductStore()
//   const storage = getStorage();
//   let arrayimages = []
//   const ImagesRefs = ref(storage, `elektra-web/${name}`)
//   listAll(ImagesRefs).then((res) => {
//     res.items.map((u, i) => {
//       getDownloadURL(u).then((urlimage) => {arrayimages.splice(i, 0, urlimage)})
//     })
//     console.log(arrayimages);
//     // prodST.clearimagess()
//     prodST.updateAllimages(arrayimages)
//   })

//   return arrayimages
// }


export const EliminarImagenPorUrl= (urlimage) => {
      const storage=getStorage()
      const imageRef = ref(storage, urlimage)
      deleteObject(imageRef).then(() =>console.log('imagen eliminada'))
      .catch((error) =>console.log("Failed to delete image: ", error))
}

//REINCIAR ARRAYS DE IMAGENES  
//el array de imagenes refrescarlo con las imagenes almacenadas en el objeto producto de electtra web ya no uses las referencias por nombre y carpetaas por que los nombres pueden cambiar
export const rebootImages = async(name) => {
  const prodST=useProductStore()
  const storage = getStorage();
  let arrayimages = []
  const ImagesRefs = ref(storage, `elektra-web/${name}`)
  listAll(ImagesRefs).then((res) => {
    res.items.map((u, i) => {
      getDownloadURL(u).then((urlimage) => {
        arrayimages.splice(i, 0, urlimage)
         prodST.updateAllimages(arrayimages)
         prodST.setnewProduct({
          'imagenes':arrayimages
          })
      })
    })
  })
}


//ISMATCHNAME ANTIGUO
// export const ismatchName = async (name) => {
//   const prodST = useProductStore()

//   if (prodST.groupProducts.length >= 1) {
//       // console.log(prodST.teamsfirebase);
//       const elem = prodST.groupProducts.map((u) => { return u.data })
//       // console.log(elem);
//       const filtrado = elem.filter((u) => u.nombre == name)
//       // console.log(filtrado);

//       const getIDdoc = prodST.groupProducts.map((u) => { return u })
//       const filterArrcontentID = getIDdoc.filter((u) => u.data.nombre == name)
//       // filterArrcontentID.length >= 1 ? console.log('Este nombre ya esta en uso') : console.log('no existe doc por lo tanto no hay id');


//       // //como tenemos el elemento identificado lo ponemos al store edit
//       // if (filtrado.length >= 1) {
//       //     figuraST.setgroupfiguraedit(filtrado[0].figure_good_moment)
//       //     tendenciaST.setitemgrouptendenciaedit(filtrado[0].trend_evidently)
//       // }
//       // console.log('tamaño');
//       // console.log(filtrado.length);
//       if (filtrado.length > 0) {
//           return false
//       } else {
//           return true
//       }
//   }

// }

// LISTAR TODOS LOS PRODUCTOS CREADOS

export const ismatchName = async (name) => {
    const prodST = useProductStore()
    if (prodST.groupProducts.length >= 1) {
        const elem = prodST.groupProducts.map((u) => { return u.data })
        const filtrado = elem.filter((u) => u.nombre == name)
        const getIDdoc = prodST.groupProducts.map((u) => { return u })
        const filterArrcontentID = getIDdoc.filter((u) => u.data.nombre == name)
        if (filtrado.length > 0) {
            return false
        } else {
            return true
        }
    }

}

//TRAER TODA LA LISTA DE PRODUCTOS
export const getAllProducts = async () => {
    const prodST = useProductStore()
    prodST.limpiarProductos()//limpia previa
    const querySnapshot = await getDocs(collection(db, "elektra-web"));
    querySnapshot.forEach((doc) => {
        prodST.llenarProductos({ id: doc.id, data: doc.data() })
    });

    return prodST.groupProducts
}


// EDITAR UN PRODUCTO POR ID
export const editProductxId = async (id, data) => {
    const postRef = doc(db, "elektra-web", id);
    await setDoc(postRef, data);
    setDoc(postRef, data)
        .then(postRef => {
            console.log("Entire Document has been updated successfully");
        })
        .catch(error => {
            console.log(error);
        })
}

const editProductMasivexId = async (id, data) => {
  const postRef = doc(db, "elektra-web", id);
  await setDoc(postRef, data);
  setDoc(postRef, data)
      .then(postRef => {
          console.log("Entire Document has been updated successfully");
      })
      .catch(error => {
          console.log(error);
      })
}

// ELIMINAR UN PRODUCTO POR ID
export const deleteProductxId = async (id) => {
        // Create a reference to the file to delete
        const prodRef = doc(db, "elektra-web", id);
        // Delete the file
       await deleteDoc(prodRef).then(() => {
          // File deleted successfully
          console.log("Entire Document has been deleted successfully");
          alert('Documento eliminado')
        }).catch((error) => {
          // Uh-oh, an error occurred!
        });
}

//////// CONTENIDO DE LA PAGINA WEB //////////////////
export const crearDocumentoContenido= async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'elektra-web-contenido'), data);
    console.log("Document written with ID: ", docRef);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
};

export const editContenidoxId = async ( data) => {
  const postRef = doc(db, "elektra-web-contenido", 'BF9QUPDJQC0S0qAcnFBX');
  await setDoc(postRef, data);
  setDoc(postRef, data)
      .then(postRef => {
          console.log("Entire Document has been updated successfully");
          alert('Documento actualizado')
      })
      .catch(error => {
          console.log(error);
      })
}

export const cargarContenidoCloud= async() => {
  const querySnapshot = await getDocs(collection(db, "elektra-web-contenido"));
  const mainST=useMainStore()
  querySnapshot.forEach((doc) => {
      // prodST.llenarProductos({ id: doc.id, data: doc.data() })
      console.log(doc.data());
      mainST.setearState(doc.data())
      
  })
}


// //TRAER TODA LA LISTA DE PRODUCTOS
// export const getAllProducts = async () => {
//   const prodST = useProductStore()
//   prodST.limpiarProductos()//limpia previa
//   const querySnapshot = await getDocs(collection(db, "elektra-web"));
//   querySnapshot.forEach((doc) => {
//       prodST.llenarProductos({ id: doc.id, data: doc.data() })
//   });
//   return prodST.groupProducts
// }
// )


export const agregadoMasivodeCampos= async() => {

  // USAR ESTA FUNCION CON MUCHO CUIDADO
  const prodST = useProductStore()
  prodST.limpiarProductos()//limpia previa
  const querySnapshot = await getDocs(collection(db, "elektra-web"));
  querySnapshot.forEach((doc) => {
  //el objeto modificado se agrega el nombe del campo y un valor por defecto {...doc.data(),(name_campo,valor)}
      const objetoModificado={...doc.data(),fichatecnica:''}
      console.log(objetoModificado)
      editProductMasivexId(doc.id,objetoModificado)
  })

  
}

export const EliminacionMasivadeCampos= async() => {
  // USAR ESTA FUNCION CON MUCHO CUIDADO
  const prodST = useProductStore()
  prodST.limpiarProductos()//limpia previa
  const querySnapshot = await getDocs(collection(db, "elektra-web"));
  querySnapshot.forEach((doc) => {
  //el objeto modificado se agrega el nombe del campo y un valor por defecto {...doc.data(),(name_campo,valor)}
      const objetoModificado=doc.data()
      delete objetoModificado.name_campo
      console.log(objetoModificado)
       editProductMasivexId(doc.id,objetoModificado)
  })

  
}


export const getMetadataFile=async(urlfire)=>{

  // Create a reference to the file whose metadata we want to retrieve
  const storage=getStorage()
  const pdfRef = ref(storage, urlfire)

// Get metadata properties
getMetadata(pdfRef)
  .then((metadata) => {
    // Metadata now contains the metadata for 'images/forest.jpg'
    console.log(metadata);
    const metaST=useUtilStore()
    metaST.setmetadata(metadata)
    return metadata
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
    return 0
  });
}