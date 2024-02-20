<template>
    <div class="container-fluid bg-white text-center">
        <div class="row">
            <p class="lead text-black    "> FitnessForAll &copy;
                <span> {{ currYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "footerComp",
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    }

}
</script>

<style scoped></style>