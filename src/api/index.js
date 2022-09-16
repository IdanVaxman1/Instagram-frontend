import axios from "axios";


export const loadPosts = () => axios.get('/feed')
export const loadPost = (postId) => axios.get(`/feed/${postId}`)
export const addPost = (newPost) => axios.post('/add', newPost)
export const deletePost = (id) => axios.delete(`/${id}`)
export const updatePost = (postId , updatedPost) => axios.patch(`/${postId}` , updatedPost)
export const likePost = (postId) => axios.patch(`/${postId}/likepost`)


export const signIn = (FormData) => axios.post('/signin' , FormData)
export const signUp = (FormData) => axios.post('/signup' , FormData)