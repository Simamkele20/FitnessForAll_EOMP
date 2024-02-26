<template>
  <div>
      <div class="welcome row">
        <div class="col">
          <h6 class="heading1 text-white ">Empowering every body</h6>
          <h1 class="heading2 text-white   "> fitness for All</h1>
        </div>
        <div class="HomeBtn col-3">
          <router-link to="/products" class="nav-link link-light">   <a class="btn btn-light " href="#" role="button">Shop Now</a></router-link>
        </div>
      </div>
    <div class="text-center text-black">
      <h3 class=" heading3 mt-5 "> New Arrivals</h3>
    </div>





    <!-- <div>
    <Spinner />
  </div> -->
  </div>
</template>

<script>

// import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    // Spinner
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {



  },
  mounted() {

  }
}
</script>

<style src="../assets/css/style.css"></style>