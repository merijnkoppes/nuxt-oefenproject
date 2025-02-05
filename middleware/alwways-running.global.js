export default defineNuxtRouteMiddleware
((to,from) => {
     console.log('this code will run before navigating to each route')
})