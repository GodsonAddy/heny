<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark" fixed="top">
      <div>
        <b-navbar-brand>
          <img src="../assets/logo.png" class="d-inline-block align-top" alt="logo" width="5%">
          HUSH
        </b-navbar-brand>
      </div>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right to="/">
            Home
          </b-nav-item>
          <b-nav-item right to="/about">
            About
          </b-nav-item>
          <b-nav-item right to="/contact">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
div:nth-child(1){
  text-decoration: underline;
  font-weight: bolder;
}
.nuxt-link-exact-active {
  color: white;
}

</style>
