export default defineEventHandler(async (event) => {
    const posts = [
        {id: 1, title: 'post1'},
        {id: 2, title: 'post2'},
        {id: 3, title: 'post3'},
        {id: 4, title: 'post4'},
    ]

    const body = await readBody(event)
    posts[1].title = body.title
    return posts
})