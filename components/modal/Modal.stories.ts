import { ref } from 'vue'
import Modal from './Modal.vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import Button from '../button/Button.vue'

export default {
    title: 'Components/Modal',
    tags: ['autodocs'],
    component: Modal,
    argTypes: {
        title: { control: 'text' },
        visible: { control: 'boolean' },
        onOk: { action: 'onOk' },
        onCancel: { action: 'onCancel' },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <div>
        <Button type="primary" @click="openModal" style="margin-bottom: 16px;">
            Open Modal
        </Button>

        <Modal
            title="Eaera modal"
            v-model:visible="visible"
            :onOk="handleOk"
            :onCancel="handleCancel"
        >
            <p>This is modal content.</p>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const visible = ref(false);

const handleOk = () => {
    alert("OK clicked");
    visible.value = false;
};

const handleCancel = () => {
    visible.value = false;
};

const openModal = () => {
    visible.value = true;
};
</script>
        `,
            },
        },
    },
} as Meta<typeof Modal>

const Template: StoryFn = (args) => {
    const visible = ref(false)

    const handleOk = () => {
        alert('OK clicked')
        visible.value = false
        args.onOk?.()
    }

    const handleCancel = () => {
        visible.value = false
        args.onCancel?.()
    }

    const openModal = () => {
        visible.value = true
    }

    return {
        components: { Modal, Button },
        setup() {
            return { args, visible, handleOk, handleCancel, openModal }
        },
        template: `
        <div>
            <Button type="primary" @click="openModal" style="margin-bottom: 16px;">
                Open Modal
            </Button>

            <Modal
                v-bind="args"
                v-model:visible="visible"
                :onOk="handleOk"
                :onCancel="handleCancel"
            >
                <p>This is modal content.</p>
            </Modal>
        </div>
    `,
    }
}

export const Default = Template.bind({})
Default.args = {
    title: 'Storybook Modal',
    visible: false,
}
