<template>
    <div class="adding-area" v-if="show">
        <textarea type="text" placeholder="Enter text"></textarea>
        <button type="button" class="btn btn-primary" @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    name: "AddingArea",
    props: ['show'],
    methods: {
        addTask: function(item) {
            let task = { name: item };
            this.$store.dispatch('ADD_TASK', task);
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
textarea {
    width: 100px;
    margin: 5px;
    resize: none;
    cursor: text;
    border-radius: 5px;
}
</style>
