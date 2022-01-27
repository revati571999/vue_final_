import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue'
import Category from '../components/Category.vue'
import Cart from '../components/Cart.vue'
import Profile from '../components/Profile.vue'
import Checkout from '../components/Checkout.vue'
import ChangePassword from '../components/ChangePassword.vue'

import Myorders from '../components/Myorders.vue'
import Paypal from '../components/Paypal.vue'

export default new Router({
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },

        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path:'/checkout',
            name:'Checkout',
            component:Checkout
        },
        {
            path:'/changepass',
            name:'ChangePassword',
            component:ChangePassword
        },
        {
            path:'/contact',
            name:'Contact',
            component:Contact
        },
        {  path:'/register',
        name:'Register',
        component:Register
    },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/paypal',
            name:'Paypal',
            component:Paypal
        },
        {
            path:'/myorders',
            name:'Myorders',
            component:Myorders
        },
        {
            path:'/categorybyid/:id',
            name:'Category',
            component:Category
        },
       
        {

            path:'/cart',
            name:'Cart',
            component:Cart
        },
    ]
})