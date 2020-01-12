import { ActionTypes } from './actionType';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.GET_ALL_SERVICES:
            return {
                ...state,
                payload: action.payload
            }
        case ActionTypes.GET_ALL_FACILITIES:
            return {
                ...state,
                facilities: action.payload
            }
        default:
            return state;
    }
}