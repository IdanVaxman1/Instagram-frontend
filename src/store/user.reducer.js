

export const userReducer = (state = { userData: null }, action) => {


    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }))
            return { ...state, userData: action?.data }


        case 'LOGUOT':
            localStorage.clear()
            return { ...state, userData: null }


        default:
            return state
    }

}

