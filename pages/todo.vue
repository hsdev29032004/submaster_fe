<template>
    <div class="flex justify-between">
        <div class="text-center mt-4 mb-4">
            <Input size="sm" v-model="valueFilter" placeholder="filter" />
        </div>
        <AddTaskForm />
    </div>
    <Kanban :valueFilter="valueFilter" />
</template>

<script setup lang="ts">
const valueFilter = ref<string>('')
</script>
