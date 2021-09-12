export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';



// export const setLoading = (user) => {
//     return {
//         type: SET_USER,
//         payload: user,
//         loading: false
//     }

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
        loading: false
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.json().then(data => {
                    data = data.map(user => user.id)
                    // console.log(data)
                    dispatch(setUser(data))
                });
                // data = data.map(user => user.id)
                // dispatch(setUser(data))
                // console.log(data)
            })
    }
}