import type { Meta, StoryObj, StoryFn } from '@storybook/vue3/*'
import TaskCard from './TaskCard.vue'
import { within, expect } from '@storybook/test';
import { TaskStatus } from '~/stores/todo';

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

const Template: StoryFn = (args: any) => ({
    components: { TaskCard },
    setup() {
        return { args }
    },
    template: `
        <TaskCard v-bind="args" />
    `,
})

export const Default: Story = {
    render: Template,
    args: {
        type: TaskStatus.TODO,
        item: {
            title: 'learn storybook',
            description: 'lorem ipsum',
            createdAt: new Date(),
        },
        index: 3,
        filter: '',
    },
    play: async ({ canvasElement }) => {
        console.log("ok")

        const taskCard = within(canvasElement).getByText('Xóa');
        expect(taskCard).toBeInTheDocument();
    }
}
