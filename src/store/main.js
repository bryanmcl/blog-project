import axios from "axios"


export const state = {
    posts: [],
    authors: [],
    post: null,
    author: null,
    error: ''
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
    error: (state) =>{
      return state.error
    }

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
    setError(state, error){
      state.error = error
    }
  }
  export const actions = {
    fetchAuthors: ({ commit }) => {
      // axios.get("http://localhost:8081/api/authors")
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        commit('setAuthors', response.data)
      })
      .catch(error =>{
        console.log(error.message)
        commit('setError', error.message)
      })
    },
    fetchPosts: ({ commit }) => {
      axios.get("https://jsonplaceholder.typicode.cm/posts")
      .then(response => {
        commit('setPosts', response.data)
      })
      .catch(error =>{
        console.log(error.message)
        commit('setError', error.message)
      })
    },
    fetchPost: ({ commit }, postId) => {
      axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(response => {
        commit('setPost', response.data)
      })
      .catch(error =>{
        console.log(error.message)
        commit('setError', error.message)
      })
    },
    fetchAuthor: ({ commit }, authorId) => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + authorId)
        .then(response => {
          commit('setAuthor', response.data)
        })
        .catch(error =>{
          console.log(error.message)
          commit('setError', error.message)
        })
    },

  }

  export default {
    state,
    getters,
    mutations,
    actions,
  }