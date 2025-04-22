<template>
  <div class="text-center mt-4 mb-4">
    <UInput type="text" v-model="valueInsert" />
    <ButtonPrimary @click="handleClick">Add</ButtonPrimary>
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
