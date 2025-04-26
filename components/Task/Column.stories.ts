import type { Meta, StoryFn } from '@storybook/vue3'
import Column from './Column.vue'
import Button from '../button/Button.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useTaskStore, TodoStatus } from '~/stores/todo'

const meta: Meta<typeof Column> = {
    title: 'Components/Column',
    component: Column,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: [TodoStatus.TODO, TodoStatus.INPROGRESS, TodoStatus.DONE],
        },
        nameColumn: { control: 'text' },
        filter: { control: 'text' },
    },
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <Column
        :type="type"
        :nameColumn="nameColumn"
        :filter="filter"
        :store="store"
    />
</template>

<script setup lang='ts'>
/*
    If your store is available, just import it instead of declaring
*/
import { createPinia, setActivePinia } from 'pinia'
import { useTaskStore } from '~/stores/todo'

const pinia = createPinia()
setActivePinia(pinia)

const store = useTaskStore()

store.inProgess = [
    {
        title: 'Task A',
        description: 'First task',
        createdAt: new Date(),
    },
    {
        title: 'Task B',
        description: 'Second task',
        createdAt: new Date(),
    },
]
</script>
                `,
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => {
    const pinia = createPinia()
    setActivePinia(pinia)

    const store = useTaskStore()
    store.inProgress = [
        {
            title: 'Task A',
            description: 'First task',
            createdAt: new Date(),
        },
        {
            title: 'Task B',
            description: 'Second task',
            createdAt: new Date(),
        },
        {
            title: 'Task C',
            description: 'Third task',
            createdAt: new Date(),
        },
    ]

    return {
        components: { Column, Button },
        setup() {
            return {
                args,
                store,
            }
        },
        template: `
            <Column
                v-bind="args"
                :store="store"
            />
        `,
    }
}

export const Default = Template.bind({})
Default.args = {
    type: TodoStatus.INPROGRESS,
    nameColumn: 'Inprogress',
    filter: '',
}
