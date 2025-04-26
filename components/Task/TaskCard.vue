<template>
    <li
        class="text-center flex justify-between p-4 bg-[#f8f8f8] dark:bg-[#0b1121]"
        v-show="new RegExp(filter, 'i').test(item.title)"
        @dblclick="() => handleDblClick(index, type, item)"
    >
        <Modal
            v-model:visible="visible"
            :onOk="handleOk"
            :onCancel="handleCancel"
        >
            <form>
                <div>
                    <label for="title">Title</label>
                    <Input
                        type="text"
                        size="sm"
                        name="title"
                        id="title"
                        fullWidth
                        v-model="valueEdit.title"
                    />
                </div>
                <div class="mt-3">
                    <label for="title">Description</label>
                    <Input
                        type="text"
                        size="sm"
                        name="desc"
                        id="desc"
                        fullWidth
                        v-model="valueEdit.description"
                    />
                </div>
            </form>
        </Modal>
        <p
            v-if="type !== TodoStatus.TODO"
            @click="() => handleMove(index, type, 'prev', item)"
            class="cursor-pointer"
        >
            {{ '<' }}
        </p>
        <p v-else></p>
        <p>
            {{ item }} -
            <span
                class="text-red-500 cursor-pointer"
                @click="() => handleDelete(index, type)"
                >Xóa</span
            >
        </p>
        <p
            v-if="type !== TodoStatus.DONE"
            @click="() => handleMove(index, type, 'next', item)"
            class="cursor-pointer"
        >
            {{ '>' }}
        </p>
        <p v-else></p>
    </li>
</template>

<script setup lang="ts">
import { TodoStatus, useTaskStore, type Task } from '~/stores/todo'

const visible = ref(false)
const idxPick = ref<number>(-1)
const groupPick = ref<TodoStatus | ''>('')
const valueEdit = reactive<Task>({
    title: '',
    description: '',
    createdAt: new Date(),
})

const store = useTaskStore()

const props = defineProps<{
    type: TodoStatus
    item: Task
    index: number
    filter: string
}>()

const handleDblClick = (index: number, group: TodoStatus, item: Task) => {
    idxPick.value = index
    groupPick.value = group

    valueEdit.title = item.title
    valueEdit.description = item.description
    valueEdit.createdAt = item.createdAt

    openModal()
}

const handleDelete = (index: number, type: TodoStatus) => {
    store?.remove(index, type)
}

const handleMove = (
    index: number,
    coloumn: TodoStatus,
    type: 'prev' | 'next',
    item: Task
) => {
    if (type === 'prev') {
        switch (coloumn) {
            case TodoStatus.TODO: {
                console.log('Error')
                break
            }
            case TodoStatus.INPROGRESS: {
                store?.remove(index, coloumn)
                store?.insert(item, TodoStatus.TODO)
                break
            }
            case TodoStatus.DONE: {
                store?.remove(index, coloumn)
                store?.insert(item, TodoStatus.INPROGRESS)
                break
            }
        }
    } else if (type === 'next') {
        switch (coloumn) {
            case TodoStatus.TODO: {
                store?.remove(index, coloumn)
                store?.insert(item, TodoStatus.INPROGRESS)
                break
            }
            case TodoStatus.INPROGRESS: {
                store?.remove(index, coloumn)
                store?.insert(item, TodoStatus.DONE)
                break
            }
            case TodoStatus.DONE: {
                console.log('Error')
                break
            }
        }
    }
}

const handleOk = () => {
    if (
        idxPick.value !== null &&
        groupPick.value !== null &&
        valueEdit.title?.trim()
    ) {
        const newTask: Task = {
            title: valueEdit.title,
            description: valueEdit.description,
            createdAt: valueEdit.createdAt,
        }
        store?.edit(idxPick.value, newTask, groupPick.value as TodoStatus)
        idxPick.value = -1
        valueEdit.title = ''
        valueEdit.description = ''
    }
    handleCancel()
}

const handleCancel = () => {
    visible.value = false
}

const openModal = () => {
    visible.value = true
}
</script>
