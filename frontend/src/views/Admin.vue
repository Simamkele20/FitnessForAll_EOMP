<template>
  <div class="container ">
    <div class="mt-4">
      <nav class="navbar nav-pills nav-underline bg-black w-25 justify-content-center mx-auto" role="tablist">
        <ul class="d-flex mt-2  ">
          <li class="nav-item mx-2">
            <a class="nav-link link-light" aria-current="page" href="#">Products</a>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/users" class="nav-link link-light">Users</router-link>
          </li>
        </ul>

      </nav>
    </div>

    <div class="bg-black text-center mt-5">
    </div>
    <div class=" prodBtn row text-end">
      <div class="col">
        <input type="text" placeholder="Search Product by name" class="form-control">
      </div>
      <div class="col ">
        <button class=" btn btn-dark"> Filter</button>
      </div>
      <div class="col-2 mx-3">
        <button class=" btn btn-dark"> Add a Product</button>
      </div>
    </div>
  </div>
  <table class="AdiCont table mt-5 w-75 text-center mx-auto" v-if="products">
    <thead>
      <tr>
        <th> Prod ID</th>
        <th>Prod Name</th>
        <th>Prod Quantity</th>
        <th>Prod AMount</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="product in products" :key="product.prodID">
        <th scope="row"> {{ product.prodID }}</th>
        <td>{{ product.prodName }} </td>
        <td> {{ product.prodQuantity }} </td>
        <td> R {{ product.prodAmount }} </td>
        <td><button class="btn btn-dark"> Edit</button></td>
        <td><button class=" btn btn-dark"> Delete</button></td>
      </tr>
    </tbody>
  </table>
  <div class="row mx-auto" v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
  name: "AdminView",
  components: {
    Spinner
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

