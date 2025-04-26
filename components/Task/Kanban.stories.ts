import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import Kanban from './Kanban.vue'
import { TodoStatus, useTaskStore } from '~/stores/todo'
import Column from './Column.vue'

const meta: Meta<typeof Kanban> = {
    title: 'Components/Kanban',
    component: Kanban,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            source: {
                code: `
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
            :store="task"
        />
    </div>
</template>

<script setup lang="ts">
import { TodoStatus, useTaskStore } from '~/stores/todo';

const props = defineProps<{
    valueFilter: string
}>()

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
                `
            }
        }
    }
}
export default meta

type Story = StoryObj<typeof Kanban>
const Template: StoryFn = (args: any) => {
    const colName = reactive([
        { name: 'Todo', type: TodoStatus.TODO },
        { name: 'In Progress', type: TodoStatus.INPROGRESS },
        { name: 'Done', type: TodoStatus.DONE },
    ])

    const store = useTaskStore()
    store.todo = [
        {
            title: 'Task A',
            description: '123',
            createdAt: new Date(),
        },
        {
            title: 'Task B',
            description: '234',
            createdAt: new Date(),
        },
    ]

    store.inProgress = [
        {
            title: 'Task C',
            description: '345',
            createdAt: new Date(),
        },
        {
            title: 'Task D',
            description: '456',
            createdAt: new Date(),
        },
    ]

    store.done = [
        {
            title: 'Task F',
            description: '567',
            createdAt: new Date(),
        },
    ]

    return {
        components: { Kanban, Column },
        setup() {
            return {
                args,
                store,
                colName
            }
        },
        template: `
<div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2"
>
    <Column
        v-for="(col) in colName"
        :key="col.type"
        :type="col.type"
        :nameColumn="col.name"
        :store="store"
        :filter="args.valueFilter"
    />
</div>
            `,
    }
}

export const Default: Story = {
    render: Template,
    args: {
        valueFilter: ""
    },
}
