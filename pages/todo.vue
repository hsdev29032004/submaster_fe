<template>
    <div class="flex justify-between">
        <div class="text-center mt-4 mb-4">
            <Input size="sm" v-model="valueFilter" placeholder="filter" />
        </div>
        <AddTaskForm />
    </div>
    <Kanban :valueFilter="valueFilter" :task="task"/>
</template>

<script setup lang="ts">
import { useTaskStore } from '~/stores/todo';

const valueFilter = ref<string>('')
const task = useTaskStore()
</script>
