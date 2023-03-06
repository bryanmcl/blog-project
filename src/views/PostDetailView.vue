<template>
    <div>
        <div class="post-wrapper" v-if="getPost">
            <div class="author-credentials" v-if="getAuthor">
                <h3><span class="highlight">{{ getAuthor.name }}</span> - (@{{ getAuthor.username }})</h3>
                <h4>{{ getAuthor.email }}</h4>
                <h4>{{ getAuthor.phone }}</h4>
            </div>

            <h1>{{ getPost.title }}</h1>
            <p class="content">{{ getPost.body }}</p>

        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PostDetailView',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'getPost',
            'getAuthor'
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPost',
            'fetchAuthor'
        ])
    },
    watch: {
        getPost() {
            this.fetchAuthor(this.getPost.userId)
        }
    },
    created() {
        this.fetchPost(this.$route.params.id)
    }
}
</script>
<style scoped>
.post-wrapper {
    width: 50%;
    padding: 2rem;
    box-shadow: 5px 5px 10px grey;
    margin: 0 auto;
}

.author-credentials {
    color: rgb(167, 167, 167);
}

.author-credentials>* {
    margin: 0.5rem 0;
}

.highlight {
    color: crimson;
}

.content {
    margin-top: 1rem;
    text-align: justify;
}
</style>