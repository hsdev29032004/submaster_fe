import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'success', 'disabled', 'danger', undefined],
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg']
        },
        fullWidth: {
            control: {type: 'boolean'}
        },
        default: {
            control: 'text',
            description: 'Nội dung hiển thị trong nút (slot)',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Kiểu other là slot',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

const Template = (args: any) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `<Button v-bind="args">{{ args.default }}</Button>`,
})

export const Primary: Story = {
    render: Template,
    args: {
        type: 'primary',
        size: 'md',
        fullWidth: false,
        default: 'Primary Button',
    },
}

export const Success: Story = {
    render: Template,
    args: {
        type: 'success',
        default: 'Success Button',
    },
}

export const Default: Story = {
    render: Template,
    args: {
        default: 'Default Button',
    },
}
