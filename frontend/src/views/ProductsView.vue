<template>
  <div class="container mt-3 ">
    <h2 class="ProdHead text-center mb-4">Our Products</h2>
    <div class="bg-black text-center">
    </div>
    <div class=" prodBtn row text-end">
      <div class="col">
        <input v-model="searchInput" type="text" placeholder="Search Product by name" @input="Search"
          class="form-control">
      </div>
      <div class="col">
        <button @click="sortItems" class=" btn btn-dark"> Sort by Price</button>
      </div>
    </div>

    <div class="ProdCar col mb-5">
      <div class=" row d-grid d-md-flex" v-if="products">
        <Card v-for="product in displayedProducts" :key="product.prodID" class=" text-center" id="cardPro">
          <template #cardHeader>
            <img :src="product.prodUrl" class="card-img-top mx-auto mt-4  w-75" alt="Pro">
          </template>
          <template #cardBody>
            <h4 class="card-text text-dark mt-3 ">
              {{ product.prodName }}
            </h4>
            <h5 class="card-text text-dark ">
              R{{ product.prodAmount }}
            </h5>
            <router-link :to="{ name: 'product', params: { id: product.prodID } }"><button
                class="btn bg-black text-white">
                View More </button> </router-link>
          </template>
        </Card>
      </div>
      <div class="row mx-auto" v-else>
        <Spinner />
      </div>
    </div>


  </div>
</template>


<script>
import Spinner from '@/components/Spinner.vue';
import Card from '../components/Card.vue';



export default {

  name: "ProductsView",
  data() {
    return {
      searchInput: '',
      sortedItems: false,
      Products: [
        {
          prodID: null,
          prodName: null,
          prodQuantity: null,
          prodAmount: null,
          prodDescription: null,
          prodUrl: null,
          userID: null
        }
      ]
    }

  },
  components: {
    Card, Spinner
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    displayedProducts() {
      let items = [...this.products];
      if (this.sortedItems) {
        items.sort((a, b) => a.prodAmount - b.prodAmount);
      } else if (this.searchInput) {
        items = items.filter(product =>
          product.prodName.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      }
      return items;
    },

  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    Search() {
      'Search input:', this.searchInput
    },
    sortItems() {
      this.sortedItems = !this.sortedItems;
    },
  }

}

</script>


<style src="../assets/css/style.css"></style>