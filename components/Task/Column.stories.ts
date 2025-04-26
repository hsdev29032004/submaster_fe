import type { Meta, StoryObj } from '@storybook/vue3'
import Column from './Column.vue'
import { TodoStatus } from '~/stores/todo'

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
    args: {
        type: TodoStatus.INPROGRESS,
        nameColumn: "In Progress",
        // @ts-ignore
        task: {
            todo: [
                { title: 'Task A', description: '123', createdAt: new Date() },
                { title: 'Task B', description: '234', createdAt: new Date() },
            ],
            inProgress: [
                { title: 'Task C', description: '345', createdAt: new Date() },
                { title: 'Task D', description: '456', createdAt: new Date() },
            ],
            done: [
                { title: 'Task F', description: '567', createdAt: new Date() },
            ]
        }
    },
}

