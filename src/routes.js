import UserComponent from './components/User/UserComponent.vue';
import CryptoComponent from './components/Crypto/CryptoComponent.vue';
import LoginComponent from './components/Auth/LoginComponent.vue';
import RegisterComponent from './components/Register/RegisterComponent.vue';
import EditUserComponent from './components/User/EditUserComponent.vue';
import IndivualComponent from './components/Crypto/IndividualComponent.vue';

//definimos las rutas
export default {
  routes: [
    { path: '/', name: 'Crypto', component: CryptoComponent, meta: { requiresAuth: true } },
    { path: '/user', name: 'User', component: UserComponent, meta: { requiresAuth: true }  },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/edit-user', name: 'Edit-user', component: EditUserComponent, meta: { requiresAuth: true }  },
    { path: '/currency', name: 'Ind-cur', component: IndivualComponent, meta: { requiresAuth: true } }
  ]
} 
