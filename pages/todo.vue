<template>
  <AddTaskForm />
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2"
  >
    <Column
      :type="TodoStatus.TODO"
      nameColumn="Todo"
      :store="task"
    />

    <Column
      :type="TodoStatus.INPROGRESS"
      nameColumn="In progress"
      :store="task"
    />

    <Column
      :type="TodoStatus.DONE"
      nameColumn="Done"
      :store="task"
    />
  </div>
</template>

<script setup>
import { useTaskStore, TodoStatus } from "@/stores/todo";

const task = useTaskStore();
</script>
