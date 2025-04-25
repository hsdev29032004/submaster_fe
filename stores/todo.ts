import { defineStore } from 'pinia'

export enum TodoStatus {
    TODO = 'todo',
    INPROGRESS = 'inProgress',
    DONE = 'done',
}
export type Task = {
    title: string,
    description: string,
    createdAt: Date
}

export const useTaskStore = defineStore('task', {
    state: (): Record<string, Task[]> => {
        return {
            todo: [],
            inProgress: [],
            done: [],
        }
    },
    actions: {
        insert(value: Task, type: TodoStatus): void {
            this[type].push(value)
            localStorage.setItem('tasks', JSON.stringify(this.$state))
        },
        remove(index: number, type: TodoStatus): void {
            this[type].splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(this.$state))
        },
        edit(index: number, value: Task, type: TodoStatus): void {
            if (!value.title?.trim()) return
            const list = this[type]
            list[index] = value
            localStorage.setItem('tasks', JSON.stringify(this.$state))
        },
    },
    getters: {
        filterTask: (state) => {
            return (filter: RegExp) => {
                return {
                    todo: state.todo?.filter((item) => filter.test(item.title)),
                    inProgress: state.inProgress?.filter((item) =>
                        filter.test(item.title)
                    ),
                    done: state.done?.filter((item) => filter.test(item.title)),
                }
            }
        },
    },
})

export type TaskStore = ReturnType<typeof useTaskStore>