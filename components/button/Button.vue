<template>
    <button :class="btnClass">
        <slot />
    </button>
</template>

<script setup lang="ts">
//@ts-ignore
const props = withDefaults(
    //@ts-ignore
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
.btn {
    cursor: pointer;

    &-primary {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    }

    &-success {
        background-color: green;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    }

    &-default {
        background-color: lightgray;
        color: black;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    }
}
</style>
