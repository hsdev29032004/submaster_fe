export type Task = {
    title: string,
    description: string,
    createdAt: Date
}

export enum TaskStatus {
    TODO = 'todo',
    INPROGRESS = 'inProgress',
    DONE = 'done',
}