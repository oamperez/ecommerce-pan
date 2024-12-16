<template>
  <div>
    <h2>Productos Disponibles</h2>
    <div class="mb-5">
      <ProductList :products="products" />
    </div>
    <div class="card border-0 p-4 mb-5" style="background-color: rgb(219 234 254 / var(--tw-bg-opacity, 1));">
      <div class="card-body">
        <h5>Suscripción Semanal</h5>
        <p>Suscríbete a nuestro servicio de entrega semanal y disfruta de estos beneficios:</p>
        <ul>
          <li>
            <small>10% de descuento en todas tus compras</small>
          </li>
          <li>
            <small>Entrega gratuita a domicilio</small>
          </li>
          <li>
            <small>Selección personalizada de panes frescos cada semana</small>
          </li>
        </ul>

        <button type="button" @click="onSubscribe()" class="btn" :class="{'btn-light': subscribe, 'btn-dark': !subscribe}">
          {{ subscribe ? 'Cancelar Suscripción' : 'Suscribirse Ahora' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import { mapGetters } from "vuex";
export default {
  name: 'HomePage',
  components: { ProductList },
  data() {
    return {
      products: []
    };
  },
  computed: {
    ...mapGetters({
      subscribe: 'subscribe',
    }),
  },
  created() {
    fetch('./data/products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  methods: {
    onSubscribe: function () {
      this.$store.dispatch('SUBSCRIBE', !this.subscribe)
    }
  }
};
</script>

<style>
.subscribe-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.subscribe-button:hover {
  background-color: #218838;
}
</style>