import type { Meta, StoryObj } from "@storybook/vue3/*";
import Input from "./Input.vue";

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'text' },
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg']
        },
        fullWidth: {
            control: {type: 'boolean'}
        },
        focus: {
            control: {type: 'color'}
        },
        outline: {
            control: {type: 'color'}
        },
        status: {
            control: {type: 'select'},
            options: ['success', 'error', 'disabled', 'warning']
        }
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

type Story = StoryObj<typeof Input>
const Template = (args: any) => ({
    components: { Input },
    setup() {
        return { args }
    },
    template: `<Input v-bind="args" />`,
})

export const Primary: Story = {
    render: Template,
    args: {
        type: 'text',
        size: 'md',
        placeholder: "Enter some value",
        fullWidth: false,
    },
}

export const Success: Story = {
    render: Template,
    args: {
        status: 'success',
    },
}