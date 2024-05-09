import React, { useState } from "react";
import { HeaderContext } from "./HeaderContext";
import { FooterContext } from "./FooterContext";
import { MainContext } from "./MainContext";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicacion CON Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina"
  },
  en: {
    headerTitle: "My application WITH Context Api",
    headerSubtitle: "My Header",
    headerLight: "Sure",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer"
  },
}

export const MyPageContext = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(language);
  const [auth, setAuth] = useState(initialAuth)

  console.log(texts);

  // https://www.youtube.com/watch?v=rg6MPk6uobs  7:50 / 10:38

  const handleTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  };

  const handleLanguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    }
    else {
      setLanguage("en");
      setTexts(translations.en);
    }
  }

  const handleAuth = (e) => {
    if(auth){
      setAuth(null)
    }else{
      setAuth(true)
    }
  }

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main 
        theme={theme} 
        texts={texts} 
        auth={auth}
      />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
