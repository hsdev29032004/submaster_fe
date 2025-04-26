import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { ref, reactive } from 'vue'
import Kanban from './Kanban.vue'
import { TodoStatus, type Task } from '~/stores/todo'
import Column from './Column.vue'

const meta: Meta<typeof Kanban> = {
    title: 'Components/Kanban',
    component: Kanban,
    tags: ['autodocs'],
    argTypes: {},
}
export default meta

type Story = StoryObj<typeof Kanban>

const Template: StoryFn = (args: any) => {
    const colName = reactive([
        { name: 'Todo', type: TodoStatus.TODO },
        { name: 'In Progress', type: TodoStatus.INPROGRESS },
        { name: 'Done', type: TodoStatus.DONE },
    ])

    const task = ref<{ todo: Task[]; inProgress: Task[]; done: Task[] }>({
        todo: [],
        inProgress: [],
        done: [],
    })

    task.value.todo = [
        { title: 'Task A', description: '123', createdAt: new Date() },
        { title: 'Task B', description: '234', createdAt: new Date() },
    ]

    task.value.inProgress = [
        { title: 'Task C', description: '345', createdAt: new Date() },
        { title: 'Task D', description: '456', createdAt: new Date() },
    ]

    task.value.done = [
        { title: 'Task F', description: '567', createdAt: new Date() },
    ]

    return {
        components: { Kanban, Column },
        setup() {
            return {
                args,
                task,
                colName,
            }
        },
    }
}

export const Default: Story = {
    render: Template,
    args: {
        valueFilter: '',
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
