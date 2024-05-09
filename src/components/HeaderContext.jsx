import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export const HeaderContext = ({texts,handleLanguage,auth, handleAuth}) => {
  const {theme, handleTheme} = useContext(ThemeContext)
  return (
    <header className={theme}>
    <h2>{texts.headerTitle}</h2>
    <h3>{texts.headerSubtitle}</h3>
    <select name="language" handleLanguage={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <input type="radio" onClick={handleTheme} name='theme' id="light-context" value='light'/>
    <label htmlFor="light-context">{texts.headerLight}</label>
    <input type="radio" onClick={handleTheme} name='theme' id="dark-context" value='dark'/>
    <label htmlFor="dark-context">{texts.headerDark}</label>
    <button onClick={handleAuth}>
      {auth ? texts.buttonLogout : texts.buttonLogin}
    </button>
</header>
  )
}
