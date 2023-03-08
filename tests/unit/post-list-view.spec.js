import Vuex from 'vuex'
import PostListView from "@/views/PostListView.vue"
import { createLocalVue, mount } from "@vue/test-utils"

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PostListView.vue', () => {
    let state
    let actions
    let getters
    let store

    beforeEach(()=>{
        state = {
            posts: [
                {
                    id: 1,
                    userId: 1,
                    title: "Test title 1",
                    body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                },
                {
                    id: 2,
                    userId: 2,
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
        }

        actions = {
            fetchPosts: jest.fn(),
            fetchAuthors: jest.fn(),
        }

        getters = {
            posts: (state) =>{
                return state.posts.map(post => {
                  post.author = state.authors.find(author => {
                    return post.userId === author.id
                  })
                  return post
                })
              }
        }
        
        store = new Vuex.Store({
            state,
            actions,
            getters
        })

    })

    it("is Vue Instance", ()=>{
        const wrapper = mount(PostListView, {
            store, localVue,
            stubs: ['router-link']
        })
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it("init page", ()=>{
        const wrapper = mount(PostListView, {
            store, localVue,
            stubs: ['router-link']
        })
        expect(actions.fetchPosts).toHaveBeenCalled()
        expect(actions.fetchAuthors).toHaveBeenCalled()
    })
    
    it("computed posts", ()=>{
        const wrapper = mount(PostListView, {
            store, localVue,
            stubs: ['router-link']
        })
        expect(wrapper.vm.posts).toEqual([
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
                userId: 2,
                title: "Test title 2",
                body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
                author : {
                    id: 2,
                    name: "User2",
                    username: "user2",
                    email: "user2@april.biz",
                }
            }
        ])
    })

    it("render postlist", ()=>{
        const wrapper = mount(PostListView, {
            store, localVue,
            stubs: ['router-link']
        })
        const posts = wrapper.get("[data-test = 'posts']")
        expect(posts.text()).toContain(state.posts[0].title)
        expect(posts.text()).toContain(state.posts[0].body)
        expect(posts.text()).toContain(state.authors[0].name)
        expect(posts.text()).toContain(state.authors[0].username)

    })
    
})