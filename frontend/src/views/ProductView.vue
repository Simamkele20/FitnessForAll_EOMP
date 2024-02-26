<template>
    <div v-if="product" class="ProdCont text-center mt-3">
        <h1 class="text-danger "> {{ product.prodName }}</h1>
        <img :src="product.prodUrl" class="card-img-top  mx-auto mt-4 border border-3 border-black p-5  w-25 " alt="Pro">
        <h5 class="w-50 mx-auto m-3">{{ product.prodDescription }}</h5>
        <h3>R{{ product.prodAmount }}</h3>
        <router-link to="/products" class="nav-link link-light"> <a class="btn btn-light  bg-black text-white m-3 " href="#"
                role="button">Go back</a></router-link>
    </div>

    <div class="row mx-auto" v-else>
        <Spinner />
    </div>
</template>


<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
}
</script>