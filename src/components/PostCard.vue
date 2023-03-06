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

export default {
    name: 'PostCard',
    data() {
        return {
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