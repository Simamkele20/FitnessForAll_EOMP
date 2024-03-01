<template>
    <div class="spinner d-none d-xxl-flex">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerComp',
}

</script>

<style scoped>
.spinner {
    position: absolute;
    left: 50%;
    bottom: 45%;
}
</style>