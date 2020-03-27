<template>
    <div class="row board">
        <div v-for="(elem) in cols" 
            :key="elem.id"
            :title="elem.name"
            class="col column"
        >
            <h3>{{ elem.name }}</h3>
            <Task :tasks="elem.tasks"/>
            <AddingArea :show="showAdding"></AddingArea>
            <AddingButton :show="!showAdding"></AddingButton>
        </div>
    </div>
</template>

<script>
//import draggable from 'vuedraggable'
import Task from './Task'
import AddingArea from './AddingArea'
import AddingButton from './AddingButton'

export default {
    name: "Column",
    components: {
        Task,
        AddingArea,
        AddingButton
    },
    computed: {
        cols() {
            return this.$store.getters.COLUMNS
        }
    },
    data () {
        return {
            showAdding: false
        }
    },
}
</script>

<style>
body {
    background: #DADADA;
}
.board {
    width: 650px;
    margin: 20px;
}
.column {
    background: #EFEFF0;
    padding-top: 5px;
    padding-bottom: 15px;
    box-shadow: 0 0 10px rgba(1, 8, 65, 0.5);
    border-radius: 5px;
    margin: 5px;
}
h3 {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
}
</style>
