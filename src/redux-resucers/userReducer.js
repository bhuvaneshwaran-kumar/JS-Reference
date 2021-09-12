import { SET_USER, UPDATE_USER } from '../actions/index'

const initialState = null;

export default function userReducer(state = initialState, actions) {
    switch (actions.type) {
        case SET_USER:
            return {
                ...actions.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                ...actions.payload
            }
        default:
            return state;
    }
}