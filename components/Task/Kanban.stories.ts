import type { Meta, StoryObj } from '@storybook/vue3'
import Kanban from './Kanban.vue'

const meta: Meta<typeof Kanban> = {
    title: 'Components/Kanban',
    component: Kanban,
    tags: ['autodocs'],
    argTypes: {},
}
export default meta

type Story = StoryObj<typeof Kanban>

export const Default: Story = {
    args: {
        valueFilter: '',
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
