<template>
  <div>
    <h2 class="mb-4">Información de Pago</h2>
    <div v-if="shopping.length">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group mb-3">
                <label for="">Número de Tarjeta</label>
                <input type="text" class="form-control" placeholder="1234 5678 9012 3456"/>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">Fecha de Expiración</label>
                <input type="text" class="form-control" placeholder="MM/AA"/>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">CVV</label>
                <input type="text" class="form-control" placeholder="000" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group mb-3">
                <label for="">Nombre en la Tarjeta</label>
                <input type="text" class="form-control" placeholder="John Doe"/>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-dark px-5" @click="processPayment()">Pagar {{ total }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-column"
      v-else
    >
      <h1 class="display-1 text-success"><i class="bi bi-check"></i></h1>
      <h5>¡Pago Completado!</h5>
      <p>Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CheckoutPage",
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
    processPayment() {
      this.$store.dispatch('CLEAR')
    }
  },
};
</script>
