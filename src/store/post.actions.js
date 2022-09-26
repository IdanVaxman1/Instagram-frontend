import * as api from '../api/index'
import { postService } from "../services/post-service";



export const loadPosts = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.loadPosts()
            const posts = data
            dispatch({
                type: 'SET_POSTS',
                posts
            })
        }
        catch (err) {
            console.log('cannot set posts', err);
        }

    }

}




export const loadPost = (postId) => {
    return async (dispatch) => {
        try {
            const { data } = await api.loadPost(postId)
            dispatch({
                type: 'SET_POST',
                data
            })
        }
        catch (err) {
            console.log('cannot set post', err);
        }

    }

}


export const addPost = (newPost) => {
    return async (dispatch) => {
        try {
            const { data } = await api.addPost(newPost)
            console.log('newpost:', newPost);
            dispatch({
                type: 'ADD_POST',
                newPost
            })
        } catch (err) {
            console.log('cannot upload post :::', err);
        }
    }
}

export const deletePost = (postId) => async (dispatch) => {

    try {
        await api.deletePost(postId)
        dispatch({ type: 'DELETE_POST', postId })
        console.log('post deleted');
    } catch (error) {
        console.log(error);
    }

}

export const updatePost = (postId, post) => async (dispatch) => {

    try {
        const { data } = await api.updatePost(postId, post)
        dispatch({ type: 'UPDATE_POST', postId, data })

    } catch (error) {
        console.log(error);
    }


}

export const likePost = (postId, post) => async (dispatch) => {

    try {
        const { data } = await api.likePost(postId)
        console.log('data ', post)
        dispatch({ type: 'ADD_LIKE', postId, data })

    } catch (error) {
        console.log(error);
    }

}

export const commentPost = (postId, commentData) => async (dispatch) => {

    try {
        const { data } = await api.commentPost(postId, commentData)
        dispatch({ type: 'COMMENT_POST', postId, data })

    } catch (error) {
        console.log(error);
    }

}




