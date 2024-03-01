<template>
  <div class="container-fluid">
    <div class="welcome row">
      <div class="col">
        <h6 class="heading1 text-white ">Empowering every body</h6>
        <h1 class="heading2 text-white   "> fitness for All</h1>
      </div>
      <div class="HomeBtn col-3">
        <router-link to="/products" class="nav-link link-light"> <a class="btn btn-light  d-none d-md-inline" href="#" role="button">Shop
            Now</a></router-link>
      </div>
    </div>
    <div class="text-center text-black">
      <h3 class=" heading3 mt-2 "> New Arrivals</h3>
    </div>
    <div class="container">
      <div class="slider  d-flex  my-4 " v-if="products">
        <div class="Scroller " v-for="product in products" :key="product.prodID">
          <img :src="product.prodUrl" class="card-img-top w-100">
          <h2 class="text-center mx-auto mx-5 w-75">{{ product.prodName }}</h2>
        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>

import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    products() {
      return this.$store.state.products?.slice(-3)
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')

  }
}
</script>

<style src="../assets/css/style.css"></style>