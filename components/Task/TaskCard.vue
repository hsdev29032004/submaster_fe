<template>
  <li
    class="text-center flex justify-between pl-2 pr-2"
    v-if="!(index === idxPick && groupPick === type)"
    v-show="new RegExp(filter, 'i').test(item)"
    @dblclick="() => handleDblClick(index, type, item)"
  >
    <p
      v-if="type !== TodoStatus.TODO"
      @click="() => handleMove(index, type, 'prev', item)"
    >
      {{ "<" }}
    </p>
    <p v-else></p>
    <p>{{ item }}</p>
    <p
      v-if="type !== TodoStatus.DONE"
      @click="() => handleMove(index, type, 'next', item)"
    >
      {{ ">" }}
    </p>
    <p v-else></p>
  </li>
  <UInput
    v-else
    v-model="valueEdit"
    @blur="handleBlur"
    @keyup.enter="handleBlur"
    class="block"
    type="text"
  />
</template>

<script setup lang="ts">
import { TodoStatus } from '~/stores/todo';

const idxPick = ref<number>(-1);
const groupPick = ref<TodoStatus | "">("");
const valueEdit = ref<string>("");

const props = defineProps<{
  type: TodoStatus;
  store: any;
  item: any,
  index: number
  filter: string
}>();

const handleDblClick = (index: number, group: TodoStatus, item: string) => {
  idxPick.value = index;
  groupPick.value = group;
  valueEdit.value = item;
};

const handleBlur = () => {
  if (
    idxPick.value !== null &&
    groupPick.value !== null &&
    valueEdit.value !== null
  ) {
    props.store?.edit(idxPick.value, valueEdit.value, groupPick.value);
    idxPick.value = -1;
    groupPick.value = TodoStatus.TODO;
    valueEdit.value = "";
  }
};

const handleMove = (
  index: number,
  coloumn: TodoStatus,
  type: "prev" | "next",
  item: string
) => {
  if (type === "prev") {
    switch (coloumn) {
      case TodoStatus.TODO: {
        console.log("Error");
        break;
      }
      case TodoStatus.INPROGRESS: {
        props.store?.remove(index, coloumn);
        props.store?.insert(item, TodoStatus.TODO);
        break;
      }
      case TodoStatus.DONE: {
        props.store?.remove(index, coloumn);
        props.store?.insert(item, TodoStatus.INPROGRESS);
        break;
      }
    }
  } else if (type === "next") {
    switch (coloumn) {
      case TodoStatus.TODO: {
        props.store?.remove(index, coloumn);
        props.store?.insert(item, TodoStatus.INPROGRESS);
        break;
      }
      case TodoStatus.INPROGRESS: {
        props.store?.remove(index, coloumn);
        props.store?.insert(item, TodoStatus.DONE);
        break;
      }
      case TodoStatus.DONE: {
        console.log("Error");
        break;
      }
    }
  }
};
</script>