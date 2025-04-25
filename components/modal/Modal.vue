<template>
    <Teleport to="body">
        <div v-if="visible" class="modal-overlay">
            <div class="modal-container">
                <h3 class="modal-title">{{ title }}</h3>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <Button type="default" @click="onCancel">Cancel</Button>
                    <Button type="success" @click="onOk">OK</Button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { Button } from '#components'

const props = withDefaults(
    defineProps<{
        title?: string
        visible?: boolean
        onOk?: () => void
        onCancel?: () => void
    }>(),
    {
        title: 'EAERA MODAL',
        visible: false,
        onOk: () => {},
        onCancel: () => {},
    }
)
</script>

<style scoped lang="scss">
.modal {
    &-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-container {
        background-color: var(--ui-bg);
        padding: 24px;
        border-radius: 8px;
        width: 400px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    &-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    &-body {
        margin-bottom: 24px;
    }

    &-footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
}
</style>
