import React from 'react'

export const Main = ({theme,texts,handleTheme}) => {
  return (
    <main className={theme}>
        <p>{texts.mainWelcome}</p>
        <p>{texts.mainHello}</p>
        <p>{texts.mainContent}</p>
</main>
  )
}
