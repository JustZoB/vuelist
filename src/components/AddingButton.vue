<template>
    <button 
    type="button" 
    class="btn btn-primary" 
    v-if="show" 
    @click="showInput"
    >
    Add
    </button>
</template>

<script>
export default {
    name: "AddingButton",
    props: ['show'],
    methods: {
        showInput: function() {
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
    margin: 5px 0px;
}
</style>
