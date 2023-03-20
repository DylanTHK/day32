export interface Todo {
    title: string
    name: string
    tasks: Task[]
}

export interface Task {
    description: string
    date: Date
}