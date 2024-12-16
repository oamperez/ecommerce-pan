import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Cart from "../views/Cart.vue";
import Subscription from '../views/Subscription.vue';
import Checkout from '../views/Checkout.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/subscription', name: 'Subscription', component: Subscription },
  { path: '/checkout', name: 'Checkout', component: Checkout }
];


const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
