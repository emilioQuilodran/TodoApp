/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import TodosContainer from './containers/TodoContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import { FilterOptions } from './pure/FilterOptions'
import { ThemeContext } from '../context/themeContext';

/**
 * @returns {React.Component} Componente Principal de la aplicacion
 */
// eslint-disable-next-line react/function-component-definition
const App = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext)
  return (
    <div id="main" className={toggle ? 'dark' : 'light'}>
      <header>
        <nav>
          <h1>TODO</h1>
          <span className="theme-switch" onClick={toggleFunction} />
        </nav>
      </header>
      <div className="content">
        <TodoFormContainer />
        <div className="todo-container">
          <TodosContainer />
          <FilterOptions />
        </div>
      </div>
    </div>
  );
};

export default App;
