<template>
  <div class="container ">
    <div class="mt-4">
      <nav class="navbar nav-pills nav-underline bg-black w-100 w-md-25 justify-content-center mx-auto" role="tablist">
        <ul class="d-block d-md-flex  mt-2  ">
          <li class="nav-item mx-2">
            <a class="nav-link link-light" aria-current="page" href="#">Products</a>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/users" class="nav-link link-light">Users</router-link>
          </li>
        </ul>

      </nav>
    </div>

 
    <div class=" prodBtn d-block d-md-flex row text-end mt-4">
      <div class="col">
        <input v-model="searchInput" type="text" placeholder="Search Product by name" @input="Search"
          class="form-control">
      </div>
      <div class="col ">
        <button class=" btn btn-dark"> Filter</button>
      </div>
      <div class="col-2  mx-3">
        <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#AddProd"> Add a Product</button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="AddProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add new Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Product Name: </h5>
              <input v-model="payload.prodName" type="text" placeholder="Name" class="form-control" required>
              <h5 class="text-start mt-2">Product Quantity: </h5>
              <input v-model="payload.prodQuantity" type="number" placeholder="Quantity" class="form-control"
                required>
              <h5 class="text-start mt-2">Product URL: </h5>
              <input v-model="payload.prodUrl" type="text mt-2" placeholder="Image URL" class="form-control" required>
              <h5 class="text-start mt-2">Product Amount: </h5>
              <input v-model="payload.prodAmount" type="number" placeholder="Amount" class="form-control" required>
              <h5 class="text-start mt-2">Product Description: </h5>
              <input v-model="payload.prodDescription" type="text" placeholder="Description" class="form-control"
                required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="addProd()" type="button" class="btn btn-dark">Add Product</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal edit-->
      <div class="modal fade" :id="'edit' + product.prodID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
        v-for="product in products" :key="product.prodID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Product Name: </h5>
              <input v-model="payload.prodName" type="text" :placeholder="product.prodName" class="form-control">
              <h5 class="text-start mt-2">Product Quantity: </h5>
              <input v-model="payload.prodQuantity" type="text mt-2" :placeholder="product.prodQuantity"
                class="form-control">
              <h5 class="text-start mt-2">Product URL: </h5>
              <input v-model="payload.prodUrl" type="text mt-2" :placeholder="product.prodUrl" class="form-control">
              <h5 class="text-start mt-2">Product Amount: </h5>
              <input v-model="payload.prodAmount" type="text" :placeholder="product.prodAmount" class="form-control">
              <h5 class="text-start mt-2">Product Description: </h5>
              <input v-model="payload.prodDescription" type="text" :placeholder="product.prodDescription"
                class="form-control">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="editProd(product.prodID)" type="button" class="btn btn-dark">Update Product</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal delete-->
      <div class="modal fade" :id="'delete' + product.prodID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
        v-for="product in products" :key="product.prodID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="delete">Delete Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Are you sure?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="deleteProd(product.prodID)" type="button" class="btn btn-dark">Delete Product</button>
            </div>
          </div>
        </div>
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
      <tr v-for="product in filterProd" :key="product.prodID">
        <th scope="row"> {{ product.prodID }}</th>
        <td>{{ product.prodName }} </td>
        <td> {{ product.prodQuantity }} </td>
        <td> R {{ product.prodAmount }} </td>
        <td><button class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#edit' + product.prodID"> Edit</button>
        </td>
        <td><button class=" btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#delete' + product.prodID">
            Delete</button></td>
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
  data() {
    return {
      searchInput: '',
      payload:
      {
        prodName: null,
        prodQuantity: null,
        prodAmount: null,
        prodDescription: null,
        prodUrl: null,
      }

    }
  },
  components: {
    Spinner
  },

  computed: {
    products() {
      return this.$store.state.products
    },
    filterProd() {
      return this.$store.state.products.filter(product =>
        product.prodName?.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');


  },
  methods: {
    Search() {
      'Search input:', this.searchInput
    },
    deleteProd(prodID) {
      this.$store.dispatch('deleteProduct', prodID)

    },
    sortItems() {
      this.sortedItems = !this.sortedItems;
    },
    addProd() {
      this.$store.dispatch('addNewProduct', this.payload)
    },
    editProd(prodID) {
      const updateData = Object.assign({}, {prodID}, this.payload)
      this.$store.dispatch('updateProduct', updateData)
    }
  }
}
</script>

