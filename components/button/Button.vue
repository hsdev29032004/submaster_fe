<template>
    <button :class="btnClass">
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        type?: 'primary' | 'success' | 'default'
    }>(),
    {
        type: 'default',
    }
)

const btnClass = computed(() => {
    if (props.type === 'success') return 'btn btn-success'
    if (props.type === 'primary') return 'btn btn-primary'
    return 'btn btn-default'
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as *;

.btn {
    cursor: pointer;

    &-primary {
        @include btn-style(blue, white);
    }

    &-success {
        @include btn-style(green, white);
    }

    &-default {
        @include btn-style(lightgray, black);
    }
}
</style>
