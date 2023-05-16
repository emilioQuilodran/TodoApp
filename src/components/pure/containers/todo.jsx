/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import rbChecked from '../../../assets/images/rb-checked.svg'
import oval from '../../../assets/images/Oval.svg'
import { ThemeContext } from '../../../context/themeContext'

const customStyleCheckbox = {
  width: '24px',
  height: '24px',
  display: 'inline-block',
  marginLeft: '5px',
  marginRight: '5px',
  background: `url(${oval}) 0 0px no-repeat`,
  '&.Mui-checked': {
    background: `url(${rbChecked}) 0 0px no-repeat`
  },
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Todo = ({
 onClick, completed, text, id, deleteItem
}) => {
  const { toggle } = useContext(ThemeContext)
  const deleteRef = useRef('delete')

  const onHover = () => {
    deleteRef.current.style.display = 'block';
  }
  const onExit = () => {
    deleteRef.current.style.display = 'none';
  }

  const taskTextStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    textDecorationColor: '#4D5067',
    color: toggle ? '#D1D2DA' : '#4D5067',
    padding: '10px'
  }

  return (
    <ListItem
      key={`${id}`}
      secondaryAction={(
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={deleteItem}
          sx={{ display: 'none' }}
          // eslint-disable-next-line react/no-string-refs
          ref={deleteRef}
        >
          <CloseIcon />
        </IconButton>
      )}
      disablePadding
      onMouseEnter={onHover}
      onMouseLeave={onExit}
    >
      <ListItemButton
        role={undefined}
        onClick={onClick}
        style={
          taskTextStyle
        }
        dense
      >
        <Checkbox
          {...label}
          edge="start"
          onChange={() => {
            console.log('asd')
          }}
          checked={completed}
          sx={
            {
              '& .MuiSvgIcon-root': { display: 'none' },
              [`&, &.${checkboxClasses.checked}`]: customStyleCheckbox,
            }
          }
        />
        <ListItemText id={id} primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo
