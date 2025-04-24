<template>
    <button :class="btnClass" :disabled="props.loading">
        <span v-if="props.loading">Loading...</span>
        <slot v-else />
    </button>
</template>

<script setup lang="ts">
export type ButtonType = 'primary' | 'success' | 'disabled' | 'default' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
const validTypes: ButtonType[] = ['primary', 'success', 'disabled', 'default', 'danger']
const validSizes: ButtonSize[] = ['sm', 'md', 'lg']

const props = withDefaults(
    defineProps<{
        type?: ButtonType
        size?: ButtonSize
        fullWidth?: boolean
        loading?: boolean
    }>(),
    {
        type: 'default',
        size: 'md',
        fullWidth: false,
        loading: false,
    }
)

const btnClass = computed(() => {
    let className: string = 'btn'

    const effectiveType = props.loading ? 'disabled' : props.type
    const isValidType = effectiveType && validTypes.includes(effectiveType)
    className += ` btn-${isValidType ? effectiveType : 'default'}`

    const isValidSize = props.size && validSizes.includes(props.size)
    className += ` btn-${isValidSize ? props.size : 'md'}`

    if (props.fullWidth) className += ' w-full'

    return className
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as *;

.btn {
    cursor: pointer;

    &-primary {
        @include btnTypeStyle(blue, white);
    }

    &-success {
        @include btnTypeStyle(green, white);
    }

    &-default {
        @include btnTypeStyle(lightgray, black);
    }

    &-disabled {
        @include btnTypeStyle(lightgray, black);
        cursor: not-allowed;
    }

    &-danger {
        @include btnTypeStyle(red, white);
        cursor: not-allowed;
    }

    &-sm {
        @include btnSizeStyle(9px 12px, 11px);
    }

    &-md {
        @include btnSizeStyle(12px 16px, 13px);
    }

    &-lg {
        @include btnSizeStyle(15px 20px, 15px);
    }
}
</style>
