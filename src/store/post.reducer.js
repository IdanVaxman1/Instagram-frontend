import { postService } from '../services/post-service'

const initialState = {
    posts: []
}


export function postReducer(state = initialState, action) {

    var newState = state
    var posts



    switch (action.type) {
        case 'SET_POSTS':
            newState = { ...state, posts: action.posts }
            break

        case 'SET_POST':
            newState = { ...state, posts: action.data }
            break

        case 'ADD_POST':
            newState = { ...state, posts: [action.newPost, ...state.posts] }
            break

        case 'DELETE_POST':
            posts = state.posts.filter(post => post._id !== action.postId)
            newState = { ...state, posts }
            break

        case 'UPDATE_POST':
        case 'ADD_LIKE':
        case 'COMMENT_POST':
            posts = state.posts.map(post => (post._id === action.postId) ? action.data : post)
            newState = { ...state, posts }
            break

        default:
    }

    window.carState = newState
    return newState


}

