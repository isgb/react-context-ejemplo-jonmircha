import React from 'react'

export const Header = ({theme,handleTheme, texts,handleLanguage}) => {
  return (
    <header className={theme}>
    <h2>{texts.headerTitle}</h2>
    <h3>{texts.headerSubtitle}</h3>
    <select name="language" handleLanguage={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <input type="radio" onClick={handleTheme} name='theme' id="light" value='light'/>
    <label htmlFor="light">{texts.headerLight}</label>
    <input type="radio" onClick={handleTheme} name='theme' id="dark" value='dark'/>
    <label htmlFor="dark">{texts.headerDark}</label>
    <button>{texts.buttonLogin}{texts.buttonLogout}</button>
</header>
  )
}
