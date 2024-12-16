<template>
  <div>
    <h2>Carrito de Compras</h2>
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body" v-if="shopping.length">
            <div
              class="card mb-3"
              v-for="(item, index) in shopping"
              :key="index"
            >
              <div class="row g-0">
                <div class="col-md-2">
                  <img :src="item.image" class="img-fluid rounded-start" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      <router-link
                        class="text-decoration-none text-dark"
                        :to="{ name: 'ProductDetail', params: { id: item.id } }"
                        >{{ item.name }}</router-link
                      >
                    </h5>
                    <p class="card-text text-truncate">
                      {{ item.description }}
                    </p>
                    <p class="card-text mb-0" style="font-size: 18px">
                      <b>Q {{ item.price }} x {{ item.quantity }}</b>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <button type="button" class="btn btn-danger btn-sm px-3" @click="onRemove(index)">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body" v-else>
            <p>Tu carrito está vacío.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5>Total: </h5>
              <h5>Q {{ total }}</h5>
            </div>
            <div class="d-flex justify-content-between align-items-center" v-if="shopping.length">
              <button type="button" class="btn btn-outline-dark" @click="onClear()">Vaciar Carrito</button>
              <router-link :to="{ name: 'Checkout' }" class="btn btn-dark">Proceder al Pago</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartPage",
  computed: {
    ...mapGetters({
      shopping: "shopping",
    }),
    total() {
      return this.shopping
        .reduce((sum, item) => sum + item.total, 0)
        .toFixed(2);
    },
  },
  methods: {
    onRemove: function (index) {
      this.$store.dispatch('REMOVE', index)
    },
    onClear: function () {
      this.$store.dispatch('CLEAR')
    }
  }
};
</script>
