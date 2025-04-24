<template>
    <input
        :type="type"
        :class="inputClass"
        :value="modelValue"
        @input="onInput"
        :placeholder="placeholder"
        :style="{
            '--input-focus-color': focus,
            '--input-outline-color': outline || '#ddd',
        }"
        :disabled="status === 'disabled'"
    />
</template>

<script setup lang="ts">
export type InputStatus = 'success' | 'error' | 'warning' | 'disabled'
export type InputSize = 'sm' | 'md' | 'lg'
const validSizes: InputSize[] = ['sm', 'md', 'lg']
const validStatus: InputStatus[] = ['success', 'error', 'disabled', 'warning']
const props = withDefaults(
    defineProps<{
        type?: string
        size?: InputSize
        fullWidth?: boolean
        modelValue?: string
        placeholder?: string
        focus?: string
        outline?: string
        status?: InputStatus
    }>(),
    {
        type: 'text',
        size: 'md',
        fullWidth: false,
        modelValue: '',
        focus: '#4ade80',
        outline: '#ddd',
    }
)

const emit = defineEmits(['update:modelValue'])

const inputClass = computed(() => {
    let className: string =
        'input bg-(--ui-bg) text-black placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 dark:text-white'
    const isValidSize = props.size && validSizes.includes(props.size)
    className += ` input-${isValidSize ? props.size : 'md'}`

    if (props.fullWidth) className += ' w-full'

    if (props.status && validStatus.includes(props.status)) {
        className += ` input-${props.status}`
    }

    return className
})

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as *;
.input {
    border-radius: 8px;
    border: 2px solid var(--input-outline-color, gray);

    &:focus {
        border: 2px solid var(--input-focus-color, green);
    }

    &-sm {
        @include inputSizeStyle(9px 12px, 13px);
    }

    &-md {
        @include inputSizeStyle(12px 16px, 15px);
    }

    &-lg {
        @include inputSizeStyle(15px 20px, 17px);
    }

    &-success {
        border-color: #22c55e;
        &:focus {
            --input-focus-color: #16a34a;
        }
    }

    &-error {
        border-color: #ef4444;
        &:focus {
            --input-focus-color: #dc2626;
        }
    }

    &-warning {
        border-color: #ffc815;
        &:focus {
            --input-focus-color: #ffbb00;
        }
    }

    &-disabled {
        border-color: #d1d5db;
        background-color: #f9fafb;
        cursor: not-allowed;
        opacity: 0.7;
    }
}
</style>
