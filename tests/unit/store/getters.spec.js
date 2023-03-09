import main from '@/store/main'

describe('getters', () => {
    const state = {
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
        ],
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
        ],
        post: {
            id: 1,
            userId: 1,
            title: "Test title 1",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            
        },
        author:{
            id: 1,
            name: "User 1",
            username: "user1",
            email: "user1@april.biz",
        },
        error: 'Request failed with status code 404'
    }
    it('getters', ()=>{
        expect(main.getters.authors(state)).toEqual([
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
        ])

        expect(main.getters.posts(state)).toEqual([
            {
                id: 1,
                userId: 1,
                title: "Test title 1",
                body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                author : {
                    id: 1,
                    name: "User 1",
                    username: "user1",
                    email: "user1@april.biz",
                }
            },
            {
                id: 2,
                userId: 1,
                title: "Test title 2",
                body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                author : {
                    id: 1,
                    name: "User 1",
                    username: "user1",
                    email: "user1@april.biz",
                }
            },
        ])

        expect(main.getters.author(state)).toEqual({
            id: 1,
            name: "User 1",
            username: "user1",
            email: "user1@april.biz",
        })

        expect(main.getters.post(state)).toEqual({
            id: 1,
            userId: 1,
            title: "Test title 1",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        })

        expect(main.getters.error(state)).toEqual('Request failed with status code 404')
        
    })
})