<template>
    <div>
        <Button
            type="success"
            size="sm"
            @click="openModal"
            style="margin-bottom: 16px"
        >
            Open Modal
        </Button>

        <Modal
            title="Add task"
            v-model:visible="visible"
            :onOk="handleClick"
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
                        v-model="valueInsert.title"
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
                        v-model="valueInsert.description"
                    />
                </div>
            </form>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { TodoStatus, useTaskStore, type Task } from '~/stores/todo'

const visible = ref(false)

const task = useTaskStore()

const valueInsert = reactive<Task>({
    title: '',
    description: '',
    createdAt: new Date(),
})

const handleClick = () => {
    if (!valueInsert.title?.trim()) return

    //-- KHÔNG ĐƯỢC ĐẨY VALUEINSERT LÊN VÌ LÀ KIỂU THAM CHIẾU
    const newTask: Task = {
        title: valueInsert.title,
        description: valueInsert.description,
        createdAt: new Date(),
    }

    task.insert(newTask, TodoStatus.TODO)

    valueInsert.title = ''
    valueInsert.description = ''
    handleCancel()
}

const handleCancel = () => {
    visible.value = false
}

const openModal = () => {
    visible.value = true
}
</script>
