/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import ButtonGroup from '@mui/material/ButtonGroup'
import FilterContainer from '../containers/FilterContainer'

// eslint-disable-next-line import/prefer-default-export

const clearTask = () => {
  // eslint-disable-next-line no-console
  console.log('clearing task')
}

export const FilterOptions = () => {
  return (
    <div className="filters">
      <span>
        5 items left
      </span>
      <ButtonGroup variant="text" aria-label="text button group">
        <FilterContainer filter="SHOW_ALL">
          All
        </FilterContainer>
        <FilterContainer filter="SHOW_COMPLETED">
          COMPLETED
        </FilterContainer>
        <FilterContainer filter="SHOW_ACTIVE">
          ACTIVE
        </FilterContainer>
      </ButtonGroup>
      <span onClick={clearTask}>
        Clear Completed
      </span>
    </div>
  )
}
