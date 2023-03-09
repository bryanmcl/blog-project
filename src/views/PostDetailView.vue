<template>
    <div>
        <div class="post-wrapper" v-if="post && !error">
            <div class="author-credentials" v-if="author">
                <h3><span class="highlight">{{ author.name }}</span> - (@{{ author.username }})</h3>
                <h4>{{ author.email }}</h4>
                <h4>{{ author.phone }}</h4>
            </div>

            <h1>{{ post.title }}</h1>
            <p class="content">{{ post.body }}</p>
        </div>
        <h1 v-else class="error-msg">
            Error Occured
            <br>
            {{ error }}
        </h1>
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
            'post',
            'author',
            'error'
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPost',
            'fetchAuthor'
        ])
    },
    watch: {
        post(val) {
            this.fetchAuthor(val.userId)
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

.error-msg {
    color: crimson;
    text-align: center;
    padding: 1rem;
    background-color: pink;
}
</style>