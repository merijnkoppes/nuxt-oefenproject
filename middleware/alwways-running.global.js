export default defineNuxtRouteMiddleware
((to,from) => {
     console.log('this is the global middleware')
})