

export default defineEventHandler(event => {
    const config = useRuntimeConfig(event)
    const {secretKey} = config

    // console.log(secretKey)
})