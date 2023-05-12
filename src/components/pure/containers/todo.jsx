/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({
 onClick, completed, text, id
}) => {
  return (
    <li
      onClick={onClick}
      style={
            {
                textDecoration: completed ? 'line-through' : 'none',
                textDecorationColor: completed ? 'green' : 'grey',
                color: completed ? 'green' : 'grey'
            }
        }
    >
      {id}
      {' '}
      -
      {text}
    </li>
  )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo
