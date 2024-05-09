import React, { useState } from "react";
import { HeaderContext } from "./HeaderContext";
import { FooterContext } from "./FooterContext";
import { MainContext } from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";

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
  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(language);
  const [auth, setAuth] = useState(initialAuth)

  console.log(texts);

  // https://www.youtube.com/watch?v=LV9qFupFxUQ

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
      <ThemeProvider>
          <HeaderContext
            texts={texts}
            handleLanguage={handleLanguage}
            auth={auth}
            handleAuth={handleAuth}
          />
          <MainContext 
            texts={texts} 
            auth={auth}
          />
          <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  );
};
