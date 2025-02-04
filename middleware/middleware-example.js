export default defineNuxtRouteMiddleware((to, from) => {
    console.log(from)
    console.log(to)
    console.log('datwasdemiddleware')
})