
//routing
import {createRouter , createWebHistory } from 'vue-router'
  
const routes = [
    {
        path:'/',
        component: ()=> import ('../views/Home.vue')
    },
    {
        path:'/about',
        component: ()=> import ('../views/About.vue')
    },
    {
        path:'/money',
        component: ()=> import ('../views/Money.vue'),

        // children: [
        //     {
        //         path: "users",
        //         name: "admin-users",
        //         component: () => import ("../pages/admin/users/index.vue")
        //     },]
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;