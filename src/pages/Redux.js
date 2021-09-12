import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../actions/index'
function Redux() {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    console.log(user)
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return (
        <div>
            Welcome to the Redux Page.
        </div>
    )
}

export default Redux
