
import { postService } from "../services/post-service";
import axios from 'axios'





export function loadPosts() {

    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3030/feed');
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


export function addPost(newPost) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/add' , {newPost});
            console.log('newpost:' , newPost);
            dispatch({
                type: 'ADD_POST',
                data
            })
        } catch (err) {
            console.log('cannot upload post :::', err);
        }
    }
}

export function removePost(postId) {
    return async (dispatch) => {
        try {
            await postService.remove(postId)
            console.log('Deleted Succesfully!');
            dispatch({
                type: 'REMOVE_POST',
                postId
            })
        } catch (err) {
            console.log('Cannot remove post', err)
        }
    }
}

export function editPost(post) {
    return async (dispatch) => {
        try {
            await postService.save(post)
            console.log('edited Succesfully!');
            dispatch({
                type: 'EDIT_POST',
                post
            })
        } catch (err) {
            console.log('Cannot edit post', err)
        }
    }
}

export function getPost(postId) {
    return (dispatch) => {
        postService.getPost(postId)
            .then(post => {
                dispatch({
                    type: 'SET_POST',
                    post
                })
            })
            .catch(err => {
                console.log('Cannot load post', err)
            })
    }
}

export function addComment(postId, newComment) {
    return async (dispatch) => {
        try {
            await postService.addComment(postId, newComment)
            console.log('add Succesfully!');
            dispatch({
                type: 'SET_COMMENT',
                postId,
                newComment
            })
        } catch (err) {
            console.log('Cannot add comment', err)
        }

    }
}

