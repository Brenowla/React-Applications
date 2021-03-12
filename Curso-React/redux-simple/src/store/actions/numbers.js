import { SET_NUM_MIN, SET_NUM_MAX } from './actionTypes'

export function setNumberMin(newMin) {
    return {
        type: SET_NUM_MIN,
        payload: newMin
    }
}

export function setNumberMax(newMax) {
    return {
        type: SET_NUM_MAX,
        payload: newMax
    }
}