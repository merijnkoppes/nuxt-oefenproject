export default defineEventHandler(async e => {
    const cookies = parseCookies(e)
    console.log('cookies:'+ JSON.stringify(cookies, null, 2))
    await sendRedirect(e, '/')
})