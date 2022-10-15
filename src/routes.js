import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Form from './components/Form.vue';
import IfElse from './components/IfElse.vue'
import Profile from './components/Profile.vue'

const routes = [
    {
        name:"Home",
        path:"/",
        component: Home
    },
    {
        name:"Form",
        path:"/form",
        component: Form
    },
    {
        name:"IfElse",
        path:"/ifelse",
        component: IfElse
    },
    {
        name:'Profile',
        path:'/profile/:name',
        component: Profile
    },
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes
    }
)

export default router
