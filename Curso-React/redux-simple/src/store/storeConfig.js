import { createStore, combineReducers } from 'redux'
import { numbersReduce } from './reducers/numbers'

const reducers = combineReducers({
    numbers: numbersReduce
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig