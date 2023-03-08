import PostCard from "@/components/PostCard.vue"
import { shallowMount } from "@vue/test-utils"

describe('PostCard.vue', () => {
    it("post initialized", ()=>{
        const post = {
            id: 101,
            userId: 10,
            title: "Test title",
            body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            author: {
                id: 10,
                name: "Clementina DuBuque",
                username: "Moriah.Stanton",
                email: "Rey.Padberg@karina.biz",
            }

        }
        const wrapper = shallowMount(PostCard, {
            propsData: { post }
    
          })
        
        expect(wrapper.isVueInstance()).toBe(true)
        expect(wrapper.find('.post').text()).toContain(post.author.name)
        expect(wrapper.find('.post').text()).toContain(post.author.username)
        expect(wrapper.find('.post').text()).toContain(post.title)

        let body = post.body
        if(post.body.length > 200){
            body = body.substring(0, 200) + '...'
        }
        expect(wrapper.find('.post').text()).toContain(body)
        
    })
})