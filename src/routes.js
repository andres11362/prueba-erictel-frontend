import UserComponent from './components/User/UserComponent.vue';
import CryptoComponent from './components/Crypto/CryptoComponent.vue';
import LoginComponent from './components/Auth/LoginComponent.vue';
import RegisterComponent from './components/Register/RegisterComponent.vue';
import EditUserComponent from './components/User/EditUserComponent.vue';
import IndivualComponent from './components/Crypto/IndividualComponent.vue';

//definimos las rutas
export default {
  routes: [
    { path: '/', name: 'crypto', component: CryptoComponent },
    { path: '/user', name: 'user', component: UserComponent },
    { path: '/login', name: 'login', component: LoginComponent },
    { path: '/register', name: 'register', component: RegisterComponent },
    { path: '/edit-user', name: 'edit-user', component: EditUserComponent },
    { path: '/currency', name: 'ind-cur', component: IndivualComponent }
  ]
} 
