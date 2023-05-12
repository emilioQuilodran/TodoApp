/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

const Filter = ({ active, onClick, children }) => {
  if (active) {
    return (<span className="active">{children}</span>)
  }
    return (
      // eslint-disable-next-line react/button-has-type
      <Button
        className="filter"
        onClick={(e) => {
        e.preventDefault()
        onClick()
    }}
      >
        {children}
      </Button>
  )
}

Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Filter
