<template>
    <div class="post">
        <h1>{{ post.title }}</h1>
        <p>by: <span class="highlight">
                {{ post.author.name }}</span> (@{{ post.author.username }})
        </p>
        <p class="content">{{ post.body | truncate(200) }}</p>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PostCard',
    data() {
        return {
            // author: {}
        }
    },
    props: {
        post: Object,
    },
    filters: {
        truncate(text, length) {
            if (text.length > length) {
                return text.substring(0, length) + '...'
            }
            return text
        }
    },
    computed: {
        ...mapGetters([
            'getAuthor',
            'getPost'
        ]),
        author() {
            this.fetchAuthor()
            return this.getAuthor
        }
    },
    methods: {
        ...mapActions([
            'fetchPost',
            'fetchAuthor'
        ]),

    },
    watch: {
    },
    created() {
        // this.fetchPost(this.post.id)
        // this.fetchAuthor()
    }
}
</script>
<style scoped>
.post {
    padding: 1rem;
    box-shadow: 5px 5px 10px grey;
    border-radius: 10px;
    height: 15rem;

    display: flex;
    flex-direction: column;

    color: white;
    background-color: rgb(28, 28, 28);
}

.post>h1 {
    font-size: 1.5rem;
}

.post>p {
    color: rgb(148, 148, 148);
}

.highlight {
    color: crimson;
    font-weight: bold;
}

.content {
    margin-top: 1rem;
    text-align: justify;
}
</style>