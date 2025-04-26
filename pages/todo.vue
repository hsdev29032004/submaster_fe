<template>
    <div class="flex justify-between">
        <div class="text-center mt-4 mb-4">
            <Input size="sm" v-model="valueFilter" placeholder="filter" />
        </div>
        <AddTaskForm />
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2"
    >
        <Column
            v-for="(col) in colName"
            :key="col.type"
            :type="col.type"
            :nameColumn="col.name"
            :filter="valueFilter"
            :store="task"
        />
    </div>
</template>

<script setup lang="ts">
import { useTaskStore, TodoStatus } from '@/stores/todo'

const valueFilter = ref<string>('')
const colName = reactive([
    { name: 'Todo', type: TodoStatus.TODO },
    { name: 'In Progress', type: TodoStatus.INPROGRESS },
    { name: 'Done', type: TodoStatus.DONE },
])
const task = useTaskStore()

onMounted(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '{}')
    task.$state = tasks
    console.log(task.$state)
})
</script>
