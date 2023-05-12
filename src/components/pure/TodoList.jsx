/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './containers/todo'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      <ul>
        {
          todos.length > 0 && (
            todos.map((todo, index) => (
              <Todo
                key={index}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...todo} // id , text ,completed
                onClick={() => onTodoClick(todo.id)}
              />
            ))
          )
        }
        {
          todos.length === 0 && (
            <p>No tienes ninguna tarea ...</p>
          )
        }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList
