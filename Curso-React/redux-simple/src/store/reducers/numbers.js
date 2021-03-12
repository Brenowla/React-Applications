import { SET_NUM_MIN, SET_NUM_MAX } from '../actions/actionTypes'

const startState = {
    min: 0,
    max: 0
}

export function numbersReduce(state = startState, action) {
    switch (action.type) {
        case SET_NUM_MIN:
            return {
                ...state,
                min: action.payload
            }
        case SET_NUM_MAX:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}