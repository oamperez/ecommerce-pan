<template>
  <div class="row" style="margin-top: 4rem;">
    <div v-for="item in products" :key="item.id" class="col-lg-3 mb-3">
      <div class="card">
        <img :src="item.image" class="card-img-top">
        <div class="card-body" style="margin-top: -75px; background: #fff;">
          <h5 class="card-title">
            <router-link class="text-decoration-none text-dark" :to="{ name: 'ProductDetail', params: { id: item.id } }">{{ item.name }}</router-link>
          </h5>
          <p class="card-text text-truncate">{{ item.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="card-text mb-0" style="font-size: 18px;">
              <b>Q {{ item.price }}</b>
            </p>
            <button type="button" class="btn btn-dark btn-sm px-3" @click="onAppend(item)">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    onAppend: function (item) {
      this.$store.dispatch('APPEND', item)
    }
  }
};
</script>