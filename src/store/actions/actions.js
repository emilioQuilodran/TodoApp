// id for todos
let nextToId = 0;
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS';

/**
 *
 * @param {string} text
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            // eslint-disable-next-line no-plusplus
            id: nextToId++,
            text
        }
    }
}

/**
 *
 * @param {number} id
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id,
        }
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

export const clearCompletedTasks = () => {
    return {
        type: CLEAR_COMPLETED_TASKS
    }
}
