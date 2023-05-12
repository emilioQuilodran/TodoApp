/* eslint-disable linebreak-style */
import React, { useState } from 'react'

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const toggleFunction = () => {
        setToggle(!toggle)
    }

    return (
      <ThemeContext.Provider value={{ toggle, toggleFunction }}>
        { children }
      </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider }
