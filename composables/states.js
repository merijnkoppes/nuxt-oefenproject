export const useCounter = () => {
    return useState('counterState', () => 1)
}
export const useTodos = () => {
    return useState('todos', () => [])
}