import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
    }
)

export default rootReducer
