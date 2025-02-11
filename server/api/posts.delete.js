export default defineEventHandler(() => {
    const posts = [
        {id: 1, title: 'post1'},
        {id: 2, title: 'post2'},
        {id: 3, title: 'post3'},
        {id: 4, title: 'post4'},
    ]
    posts.splice(0,1)
    return posts 
})