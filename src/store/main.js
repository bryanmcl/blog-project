import axios from "axios"


export const state = {
    posts: [],
    authors: [],
    post: null,
    author: null
  }

  export const getters = {
    posts: (state) =>{
      return state.posts.map(post => {
        post.author = state.authors.find(author => {
          return post.userId === author.id
        })
        return post
      })
    },
    post: (state) =>{
      return state.post
    },
    authors: (state) =>{
      return state.authors
    },
    author: (state) =>{
      return state.author
    },

  }
  export const mutations = {
    setAuthors(state, authors) {
      state.authors = authors
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.post = post
    },
    setAuthor(state, author) {
      state.author = author
    },
  }
  export const actions = {
    fetchAuthors: ({ commit }) => {
      // axios.get("http://localhost:8081/api/authors")
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        commit('setAuthors', response.data)
      })
    },
    fetchPosts: ({ commit }) => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        commit('setPosts', response.data)
      })
    },
    fetchPost: ({ commit }, postId) => {
      axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(response => {
        commit('setPost', response.data)
      })
    },
    fetchAuthor: ({ commit }, authorId) => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + authorId)
        .then(response => {
          commit('setAuthor', response.data)
        })
    },

  }

  export default {
    state,
    getters,
    mutations,
    actions,
  }