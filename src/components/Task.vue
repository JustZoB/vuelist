<template>
    <draggable 
    class="list-group" 
    :list="tasks" group="people"
    >
        <div
        class="list-group-item task btn btn-outline-info"
        v-for="(element) in tasks"
        :key="element.name"
        >
        {{ element.name }}
        </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: "Task",
    props: ['tasks'],
    components: {
        draggable,
    }
}
</script>

<style>
.task {
    width: 100%;
    cursor: move;
    text-align: center;
    padding: 20px 20px;
    border-radius: 10px;
    margin: 5px 0px;
}
</style>
