<template>
  <div>
    <h2 class="text-center bg-red-200 text-black">{{ nameColumn }}</h2>
    <draggable
      class="bg-[#0b1121] light:bg-[#f8f8f8]"
      v-model="store[type]"
      tag="ul"
      group="task"
      @end="handleDrop"
    >
      <template #item="{ element: item, index }">
        <TaskCard :filter="filter" :type="type" :store="store" :item="item" :index="index" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { TodoStatus } from "~/stores/todo";

const props = defineProps<{
  type: TodoStatus;
  nameColumn: string;
  store: any;
  filter: string;
}>();

const handleDrop = () => {
  localStorage.setItem("tasks", JSON.stringify(props.store));
};
</script>
