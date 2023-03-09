import Vuex from 'vuex'
import PostDetailView from "@/views/PostDetailView.vue"
import { createLocalVue, mount } from "@vue/test-utils"

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
    $route: {
        params: {
            id: 1
        }
    }
}

describe("PostDetailView.vue", ()=>{
    let state
    let actions
    let getters
    let store

    beforeEach(()=>{
        state = {
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
                phone: '123123'
            },
            error: ''
        }

        actions = {
            fetchPost: jest.fn(),
            fetchAuthor: jest.fn()
        }
        
        getters = {
            post: state => state.post,
            author: state => state.author,
            error: state=> state.error
        }
        
        store = new Vuex.Store({
            state,
            actions,
            getters
        })
    })

    it("is Vue Instance", ()=>{
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it("call fetch post", ()=>{
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        expect(actions.fetchPost).toHaveBeenCalled()
    })

    it("call fetch author", async ()=>{
        const spy = jest.spyOn(PostDetailView.methods, 'fetchAuthor')
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })

        store.state.post = {
            id: 2,
            userId: 1,
            title: "Test title 2",
            body: "test body 2",
            
        }

        await wrapper.vm.$nextTick()

        expect(spy).toBeCalled()
        
    })

    it("computed post", ()=>{
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        expect(wrapper.vm.post).toEqual({
            id: 1,
            userId: 1,
            title: "Test title 1",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",  
        })
    })

    it("computed author", ()=>{
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        expect(wrapper.vm.author).toEqual({
            id: 1,
            name: "User 1",
            username: "user1",
            email: "user1@april.biz", 
            phone: '123123'
        })
    })

    it("render post", ()=>{
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        const post = wrapper.find('.post-wrapper').text()
        expect(post).toContain(state.post.title)
        expect(post).toContain(state.post.body)
    })

    it("render post error", ()=>{
        store.replaceState({
            post: null,
            author: null,
            error: 'Request failed with status code 404'
        })
        const wrapper = mount(PostDetailView, {
            store, localVue, mocks
        })
        const post = wrapper.find('.post-wrapper')
        expect(post.exists()).toBe(false)
        expect(wrapper.find('.error-msg').text()).toContain('Request failed with status code 404')
    })
})