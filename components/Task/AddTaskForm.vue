<template>
  <div class="text-center mt-4 mb-4">
    <UInput type="text" v-model="valueInsert" />
    <Button type="success" @click="handleClick">Add</Button>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, useTaskStore } from "~/stores/todo";

const task = useTaskStore();

const valueInsert = ref<string | null>("");

const handleClick = () => {
  if (!valueInsert.value?.trim()) return;
  task.insert(valueInsert.value, TodoStatus.TODO);
  valueInsert.value = "";
};
</script>
