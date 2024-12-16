<template>
  <div id="app">
    <navbar-app></navbar-app>
    <div class="container" style="margin-top: 6rem;">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarApp from "./Navbar";
export default {
  name: "App",
  components: { NavbarApp },
};
</script>
