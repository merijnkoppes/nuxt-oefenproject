export const useCounter = () => {
    return useState('counterState', () => 1)
}