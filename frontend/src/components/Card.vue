<template>
    <div class="card">
        <slot name="cardHeader"> </slot>
    </div>
    <div class="card-body">
        <slot name="cardBody"></slot>
    </div>
</template>

<script>
export default {
    components: "CardView"
}
</script>

<style scoped></style>