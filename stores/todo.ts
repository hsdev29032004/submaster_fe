import { defineStore } from "pinia";

export enum TodoStatus {
  TODO = "todo",
  INPROGRESS = "inProgress",
  DONE = "done",
}

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      todo: ["Build a landing page", "Build a todo app", "Learn storybook"],
      inProgress: ["Learn pinia", "Learn nuxtjs"],
      done: ["Learn vuejs", "Learn scss/sass"],
    };
  },
  actions: {
    insert(value: string, type: TodoStatus): void {
      this[type].push(value);
    },
    remove(index: number, type: TodoStatus): void {
      this[type].splice(index, 1);
    },
    edit(index: number, value: string, type: TodoStatus): void {
      if (!value.trim()) return;
      const list = this[type];
      list[index] = value;
    },
  },
});
