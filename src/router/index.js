import { createWebHistory, createRouter } from "vue-router";
import CrearProducto from '../views/CrearProducto.vue'
import EditarProducto from "../views/EditarProducto.vue";
import AllProducts from "../views/AllProducts.vue";
import AdministrarContenido from "../views/AdministrarContenido.vue";



const routes = [
    { path: "/", component: AllProducts},
    { path: "/crear-producto", component: CrearProducto},
    { path: "/administrar-contenido", component: AdministrarContenido },
    { path: "/editar-producto/:id", name:"editar-producto", component: EditarProducto},
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});





router.beforeEach( (to, from) => {


    // // instead of having to check every route record with
    // // to.matched.some(record => record.meta.requiresAuth)
    // if (to.meta.requiresAuth && isLogued() ) {
    //     // if (to.meta.requiresAuth && false) {
    //     // this route requires auth, check if logged in
    //     // if not, redirect to login page.
    //     return {
    //         path: '/login',
    //         // save the location we were at to come back later
    //         query: { redirect: to.fullPath },
    //     }
    // }
})


export default router;