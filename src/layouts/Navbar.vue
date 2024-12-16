<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top"
  >
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >E-commerce de Pan</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Cart' }">
              <i class="bi bi-cart me-2"></i>
              <span class="badge rounded-pill bg-primary">{{ shopping.reduce((sum, item) => sum + item.quantity, 0) }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NavbarApp",
  computed: {
    ...mapGetters({
      shopping: "shopping",
    }),
  },
};
</script>
