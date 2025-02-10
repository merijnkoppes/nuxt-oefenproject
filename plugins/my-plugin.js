export default defineNuxtPlugin(() => {
    addRouteMiddleware((to,from) => {
        if(to.path === '/database') return abortNavigation('Mag niet!')
    })

    addRouteMiddleware('denyhacker',(to, from) => {
        const name = to.params.name
        if(name === 'hacker') return abortNavigation('Hackers zijn niet toegestaan')

    })

    addRouteMiddleware(() => {
        console.log('globalmiddlewarevanuitdeplugin')
    }, {global: true})
})