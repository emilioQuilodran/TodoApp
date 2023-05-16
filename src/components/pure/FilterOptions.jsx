/* eslint-disable template-curly-spacing */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import ButtonGroup from '@mui/material/ButtonGroup'
import FilterContainer from '../containers/FilterContainer'

export const FilterOptions = (props) => {
  const { todosCount, actions } = props
  const itemWord = todosCount === 1 ? 'item' : 'items'
  return (
    <div className="filters">
      <span>
        {`${todosCount } ` || 'NO'}
        { `${itemWord } ` }
        left
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
      <span onClick={actions.clearCompletedTasks}>
        Clear Completed
      </span>
    </div>
  )
}
