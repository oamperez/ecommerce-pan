<template>
  <div>
    <h2>Suscripción Semanal</h2>
    <p>
      Suscríbete a la entrega semanal de pan y recibe beneficios exclusivos:
    </p>
    <ul>
      <li>Descuento especial para suscriptores.</li>
      <li>Entrega puntual cada semana.</li>
      <li>Asegura tu pan favorito sin preocuparte por la disponibilidad.</li>
    </ul>
    <button @click="subscribe" class="subscribe-button">
      Suscribirse Ahora
    </button>
  </div>
</template>

<script>
export default {
  name: "SuscriptionPage",
  methods: {
    subscribe() {
      alert("¡Gracias por suscribirte a la entrega semanal de pan!");
    },
  },
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
