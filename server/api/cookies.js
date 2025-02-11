export default defineEventHandler(e => {
    const cookies = parseCookies(e)
    console.log('cookies:'+ JSON.stringify(cookies, null, 2))
})