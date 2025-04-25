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
            :type="TodoStatus.TODO"
            nameColumn="Todo"
            :filter="valueFilter"
        />

        <Column
            :type="TodoStatus.INPROGRESS"
            nameColumn="In progress"
            :filter="valueFilter"
        />

        <Column
            :type="TodoStatus.DONE"
            nameColumn="Done"
            :filter="valueFilter"
        />
    </div>
</template>

<script setup lang="ts">
import { useTaskStore, TodoStatus } from '@/stores/todo'

const task = useTaskStore()

const valueFilter = ref<string>('')

onMounted(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '{}')
    task.$state = tasks
})
</script>
