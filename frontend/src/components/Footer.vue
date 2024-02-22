<template>
    <div class="container-fluid bg-light text-center">
        <div class="row">
            <p class="footer1 lead text-black    "> FitnessForAll &copy;
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