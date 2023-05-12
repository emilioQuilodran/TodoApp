/* eslint-disable no-console */
import React, { useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { ThemeContext } from '../../context/themeContext'

const TodoForm = ({ submit }) => {
  const { toggle } = useContext(ThemeContext)
  const newText = useRef()

  const createTodo = (e) => {
    e.preventDefault();
    if (newText.current.value !== '') {
      submit(newText.current.value)
    } else {
      console.log('debes ingresar un valor')
    }
    newText.current.value = '';
  }

  const bkgLight = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 8px 21px -2px rgba(66,62,62,0.56)',
    borderColor: 'transparent'
  }

  const bkgDark = {
    backgroundColor: '#25273D',
    borderRadius: '10px',
    boxShadow: '2px 6px 23px 0px rgba(20,20,20,1)',
    borderColor: 'transparent'
  }

  return (
    <div>
      <Box
        component="form"
        noValidate
        onSubmit={createTodo}
      >
        <TextField
          id="input-with-icon-textfield"
          placeholder="Create a new todo..."
          style={!toggle ? bkgLight : bkgDark}
          inputRef={newText}
          InputProps={{
            sx: {
              '& fieldset': {
                  border: 'none',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <CircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Box>
    </div>
  )
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default TodoForm
