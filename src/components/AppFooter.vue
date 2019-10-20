<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        NAGP Blogger
      </router-link>
      <span class="attribution">
        An interactive blogging site by <b>Sagar Jana</b>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>
