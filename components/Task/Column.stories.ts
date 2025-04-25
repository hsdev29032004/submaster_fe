import type { Meta, StoryObj } from '@storybook/vue3'
import Column from './Column.vue'
import { TodoStatus, useTaskStore } from '~/stores/todo'
import { createPinia, setActivePinia } from 'pinia'

const meta: Meta<typeof Column> = {
    title: 'Components/Column',
    component: Column,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: [TodoStatus.TODO, TodoStatus.INPROGRESS, TodoStatus.DONE],
        },
    },
}
export default meta

type Story = StoryObj<typeof Column>

export const Default: Story = {
    render: (args) => ({
        components: { Column },
        setup() {
            const pinia = createPinia()
            setActivePinia(pinia)

            const store = useTaskStore()
            store.todo = [
                {
                    title: 'Task 1',
                    description: 'This is the first task',
                    createdAt: new Date(),
                },
                {
                    title: 'Task 2',
                    description: 'This is the second task',
                    createdAt: new Date(),
                },
            ]

            return { args, store }
        },
        template: `<Column v-bind="args" :store="store" />`,
    }),
    args: {
        type: TodoStatus.TODO,
        nameColumn: 'Todo',
        filter: '',
    },
}
