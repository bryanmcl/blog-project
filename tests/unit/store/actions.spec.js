import main from '@/store/main'
import axios from 'axios'



jest.mock('axios')
describe('actions', () => {

    it('fetch authors', async ()=>{
        const commit = jest.fn()
        axios.get.mockResolvedValueOnce({data: 'data'})

        await main.actions.fetchAuthors({commit})
        expect(commit).toHaveBeenCalledWith('setAuthors', 'data')
    })

    it("fetch authors error", async () => {
        const commit = jest.fn()
        const err = 'Error';
        axios.get.mockRejectedValue(new Error(err));

        await main.actions.fetchAuthors({commit})
        await Promise.resolve();
  
        expect(commit).toHaveBeenCalledWith('setError', err);
    });

    it('fetch posts', async ()=>{
        const commit = jest.fn()
        axios.get.mockResolvedValueOnce({data: 'data'})

        await main.actions.fetchPosts({commit})
        expect(commit).toHaveBeenCalledWith('setPosts', 'data')
    })

    it("fetch posts error", async () => {
        const commit = jest.fn()
        const err = 'Error';
        axios.get.mockRejectedValue(new Error(err));
        
        await main.actions.fetchPosts({commit})
        await Promise.resolve();
  
        expect(commit).toHaveBeenCalledWith('setError', err);
      });

    it('fetch author', async ()=>{
        const commit = jest.fn()
        axios.get.mockResolvedValueOnce({data: 'data'})

        await main.actions.fetchAuthor({commit}, 1)
        expect(commit).toHaveBeenCalledWith('setAuthor', 'data')
    })

    it("fetch author error", async () => {
        const commit = jest.fn()
        const err = 'Error';
        axios.get.mockRejectedValue(new Error(err));

        await main.actions.fetchAuthor({commit}, 1)
        await Promise.resolve();
  
        expect(commit).toHaveBeenCalledWith('setError', err);
      });

    it('fetch post', async ()=>{
        const commit = jest.fn()
        axios.get.mockResolvedValueOnce({data: 'data'})

        await main.actions.fetchPost({commit}, 1)
        expect(commit).toHaveBeenCalledWith('setPost', 'data')
    })

    it("fetch post error", async () => {
        const commit = jest.fn()
        const err = 'Error';
        axios.get.mockRejectedValue(new Error(err));

        await main.actions.fetchPost({commit}, 1)
        await Promise.resolve();
  
        expect(commit).toHaveBeenCalledWith('setError', err);
      });
})