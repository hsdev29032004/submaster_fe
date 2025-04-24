<template>
  <div class="flex text-center mt-4 mb-4">
    <Input type="text" v-model="valueInsert" size="sm" />
    <Button type="success" size="sm" @click="handleClick">Add</Button>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, useTaskStore } from "~/stores/todo";

const task = useTaskStore();

const valueInsert = ref<string>("");

const handleClick = () => {
  if (!valueInsert.value?.trim()) return;
  task.insert(valueInsert.value, TodoStatus.TODO);
  valueInsert.value = "";
};
</script>
