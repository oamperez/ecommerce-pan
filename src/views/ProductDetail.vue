<template>
  <div>
    <h2>Detalle del Producto</h2>
    <router-link class="text-decoration-none" :to="{ name: 'Home' }">
      Regresar
    </router-link>
    <div v-if="product" class="mt-3">
      <div class="row">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8">
          <h5 class="card-title">
            <router-link
              class="text-decoration-none text-dark"
              :to="{ name: 'ProductDetail', params: { id: product.id } }"
              >{{ product.name }}</router-link
            >
          </h5>
          <p class="card-text" style="font-size: 20px">Q {{ product.price }}</p>
          <p class="card-text text-truncate">{{ product.description }}</p>
          <button
            type="button"
            class="btn btn-dark px-3"
            @click="onAppend(product)"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>El producto no fue encontrado.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailPage",
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        this.product = data.find(
          (product) => product.id === parseInt(productId)
        );
      });
  },
  methods: {
    onAppend: function (item) {
      this.$store.dispatch("APPEND", item);
    },
  },
};
</script>
