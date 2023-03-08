import main from '@/store/main'

describe('mutations', () => {
    const authors = [
        {
            id: 1,
            name: "User 1",
            username: "user1",
            email: "user1@april.biz",
        },
        {
            id: 2,
            name: "User2",
            username: "user2",
            email: "user2@april.biz",
        }
    ]

    const posts = [
        {
            id: 1,
            userId: 1,
            title: "Test title 1",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 2,
            userId: 1,
            title: "Test title 2",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 3,
            userId: 2,
            title: "Test title 3",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },

    ]
    it('set authors', () => {

        const state = {
            authors:[]
        }

        main.mutations.setAuthors(state, authors)

        expect(state).toEqual({
            authors: [
            {
                id: 1,
                name: "User 1",
                username: "user1",
                email: "user1@april.biz",
            },
            {
                id: 2,
                name: "User2",
                username: "user2",
                email: "user2@april.biz",
            }
        ]})
    })
    it('set posts', () => {

        const state = {
            posts : []
        }

        main.mutations.setPosts(state, posts)

        expect(state).toEqual({
            posts: [
                {
                    id: 1,
                    userId: 1,
                    title: "Test title 1",
                    body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                },
                {
                    id: 2,
                    userId: 1,
                    title: "Test title 2",
                    body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                },
                {
                    id: 3,
                    userId: 2,
                    title: "Test title 3",
                    body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                },
        ]})
    })

    
    it('set author', () => {

        const state = {
            author:{}
        }

        main.mutations.setAuthor(state, authors[0])

        expect(state).toEqual({
            author: {
                id: 1,
                name: "User 1",
                username: "user1",
                email: "user1@april.biz",
            }
        })
    })
    
    it('set post', () => {

        const state = {
            post:{}
        }
        main.mutations.setPost(state, posts[0])

        expect(state).toEqual({
            post: {
                id: 1,
                userId: 1,
                title: "Test title 1",
                body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            },
        })
    })


  })