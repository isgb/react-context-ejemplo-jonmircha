import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export const FooterContext = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={theme}>
    <h4>Mi pie de página</h4>
</footer>
  )
}
