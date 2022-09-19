

const initialState = {
    userData: null,
    userPosts: []
}

export const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'SET_USER':
            return { ...state, userData: action?.data }

        case 'SET_POSTS':
            return{...state , userPosts : action?.data}



        default:
            return state
    }

}