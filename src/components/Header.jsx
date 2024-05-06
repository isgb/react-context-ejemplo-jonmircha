import React from 'react'

export const Header = () => {
  return (
    <header>
    <h2>Mi aplicación SIN Context API</h2>
    <h3>Mi cabecera</h3>
    <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <input type="radio" name='theme' id="light" value='light'/>
    <label htmlFor=""></label>
</header>
  )
}
