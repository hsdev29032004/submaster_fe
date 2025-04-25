import type { Meta, StoryObj } from '@storybook/vue3/*'
import TaskCard from './TaskCard.vue'
import { TodoStatus } from '~/stores/todo'

const meta: Meta<typeof TaskCard> = {
    title: 'Components/TaskCard',
    component: TaskCard,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['todo', 'inProgess', 'done'],
            description: "'todo' | 'inProgess' | 'done'",
        },
        index: {
            description: 'Index của TaskCard trong column',
        },
        filter: {
            description: 'Từ khóa tìm kiếm task',
        },
    },
}

export default meta
type Story = StoryObj<typeof TaskCard>

const Template = (args: any) => ({
    components: { TaskCard },
    setup() {
        return { args }
    },
    template: `
        <ul class="bg-[#f8f8f8]">
            <TaskCard v-bind="args" />
        </ul>
    `,
})

export const Default: Story = {
    render: Template,
    args: {
        type: TodoStatus.TODO,
        item: {
            title: 'learn storybook',
            description: 'lorem ipsum',
            createdAt: new Date(),
        },
        index: 3,
        filter: '',
    },
}
