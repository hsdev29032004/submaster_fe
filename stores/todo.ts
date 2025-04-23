import { defineStore } from "pinia";

export enum TodoStatus {
  TODO = "todo",
  INPROGRESS = "inProgress",
  DONE = "done",
}

export const useTaskStore = defineStore("task", {
  state: (): Record<string, string[]> => {
    return {
      todo: [],
      inProgress: [],
      done: [],
    };
  },
  actions: {
    insert(value: string, type: TodoStatus): void {
      this[type].push(value);
      localStorage.setItem("tasks", JSON.stringify(this.$state))
    },
    remove(index: number, type: TodoStatus): void {
      this[type].splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.$state))
    },
    edit(index: number, value: string, type: TodoStatus): void {
      if (!value.trim()) return;
      const list = this[type];
      list[index] = value;
      localStorage.setItem("tasks", JSON.stringify(this.$state))
    },
  },
  getters: {
    filterTask: (state) => {
      return (filter: RegExp) => {
        return {
          todo: state.todo?.filter(item => filter.test(item)),
          inProgress: state.inProgress?.filter(item => filter.test(item)),
          done: state.done?.filter(item => filter.test(item))
        }
      };
    },
  },
});
