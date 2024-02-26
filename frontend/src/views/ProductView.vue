<template>
    <div v-if="product">
        <p> {{product.prodName}}</p>
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
    computed:{
        product(){
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params.id)
    }
}
</script>