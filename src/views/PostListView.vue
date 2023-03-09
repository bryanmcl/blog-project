<template>
    <div>
        <div class="posts-wrapper" data-test="posts" v-if="!error">
            <router-link v-for="post in posts" :key="post.id" :to='"/posts/" + post.id'>
                <PostCard :post="post" />
            </router-link>
        </div>
        <div v-else class="error-msg">
            {{ error }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'PostListView',
    components: {
        PostCard
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'posts',
            'error'
        ]),

    },
    methods: {
        ...mapActions([
            'fetchPosts',
            'fetchAuthors'
        ])
    },
    mounted() {
        this.fetchAuthors()
        this.fetchPosts()

    }

}
</script>
<style scoped>
.posts-wrapper {
    width: 80%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
}

.posts-wrapper a {
    text-decoration: none;
    color: initial;
}

.error-msg {
    color: crimson;
    text-align: center;
    padding: 1rem;
    background-color: pink;
}
</style>