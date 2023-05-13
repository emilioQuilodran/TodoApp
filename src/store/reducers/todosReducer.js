import {
 ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TASKS, DELETE_TODO
} from '../actions/actions'

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => ((todo.id === action.payload.id)
                ? {
                    ...todo,
                    completed: !todo.completed

                } : todo))
        case CLEAR_COMPLETED_TASKS:
            return state.filter((todo) => todo.completed === false)
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id)
        default:
            return state;
    }
}

export default todosReducer
