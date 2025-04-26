<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2"
    >
        <Column
            v-for="(col) in colName"
            :key="col.type"
            :type="col.type"
            :nameColumn="col.name"
            :filter="valueFilter"
            :task="task"
        />
    </div>
</template>

<script setup lang="ts">
import { TodoStatus, type TaskStore } from '~/stores/todo';

const props = defineProps<{
    valueFilter: string,
    task: TaskStore
}>()

const colName = reactive([
    { name: 'Todo', type: TodoStatus.TODO },
    { name: 'In Progress', type: TodoStatus.INPROGRESS },
    { name: 'Done', type: TodoStatus.DONE },
])

onMounted(() => {
    if(typeof localStorage.getItem('tasks') === 'object'){
        const tasks = JSON.parse( localStorage.getItem('tasks') || '{}')
        props.task.$state = tasks
        console.log(props.task.$state)
    }
})
</script>