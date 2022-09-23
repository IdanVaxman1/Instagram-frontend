import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:3000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }

    return req
})


export const loadPosts = () => API.get('/feed')
export const loadPost = (postId) => API.get(`/feed/${postId}`)
export const addPost = (newPost) => API.post('/add', newPost)
export const deletePost = (id) => API.delete(`/${id}`)
export const updatePost = (postId, updatedPost) => API.patch(`/${postId}`, updatedPost)
export const likePost = (postId) => API.patch(`/${postId}/likepost`)
export const commentPost = (postId, commentData) => API.post(`/${postId}/commentpost`, { commentData })


export const signIn = (FormData) => API.post('/signin', FormData)
export const signUp = (FormData) => API.post('/signup', FormData)
export const updateUser = (userId, FormData) => API.patch(`/setting/${userId}`, FormData)
export const getUser = (userId) => API.get(`/user/${userId}`)
export const getUserPosts = (userId) => API.get(`/userPost/${userId}`)
export const following = (userId, profileId) => API.patch(`/following/${userId}`, { profileId })