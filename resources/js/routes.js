import Home from './components/Home.vue';
//import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
export const routes = [
{
path: '/',
name: 'home',
component: Home,
meta: {
    auth: undefined
  }
},

{
path: '/login',
name: 'login',
component: Login,
meta: {
    auth: false
  }
},
{
path: '/dashboard',
name: 'dashboard',
component: Dashboard,
meta: {
    auth: true
  }
}
]