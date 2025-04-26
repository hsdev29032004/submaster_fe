<template>
    <div>
        <h2 class="text-center bg-red-200 text-black">{{ nameColumn }}</h2>
        <draggable
            v-model="task[type]"
            tag="ul"
            group="task"
            @end="handleDrop"
        >
            <template #item="{ element: item, index }">
                <TaskCard
                    :filter="filter"
                    :type="type"
                    :item="item"
                    :index="index"
                />
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { TaskStatus, type TaskStore } from '~/stores/todo'

const props = defineProps<{
    type: TaskStatus
    nameColumn: string
    filter: string
    task: TaskStore
}>()

const handleDrop = () => {
    localStorage.setItem('tasks', JSON.stringify(props.task.$state))
}
</script>
