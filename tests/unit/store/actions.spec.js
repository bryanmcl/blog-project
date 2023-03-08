import main from '@/store/main'

let url = ''

jest.mock("axios", () => ({
    // get: () => new Promise(res => res({ data: 'data' }) )
    get: (_url, _body) => new Promise(res => {
        url = _url
        res({data: 'data'})
    })
  }))

describe('actions', () => {
    it('fetch authors', async ()=>{
        const commit = jest.fn()

        await main.actions.fetchAuthors({commit})

        expect(url).toBe("https://jsonplaceholder.typicode.com/users")
        expect(commit).toHaveBeenCalledWith('setAuthors', 'data')
    })

    it('fetch posts', async ()=>{
        const commit = jest.fn()

        await main.actions.fetchPosts({commit})

        expect(url).toBe("https://jsonplaceholder.typicode.com/posts")
        expect(commit).toHaveBeenCalledWith('setPosts', 'data')
    })

    it('fetch author', async ()=>{
        const commit = jest.fn()

        await main.actions.fetchAuthor({commit}, 1)

        expect(url).toBe("https://jsonplaceholder.typicode.com/users/1")
        expect(commit).toHaveBeenCalledWith('setAuthor', 'data')
    })

    it('fetch post', async ()=>{
        const commit = jest.fn()

        await main.actions.fetchPost({commit}, 1)

        expect(url).toBe("https://jsonplaceholder.typicode.com/posts/1")
        expect(commit).toHaveBeenCalledWith('setPost', 'data')
    })
})