import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
    es: {
        headerTitle: "Mi aplicacion SIN Context Api",
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
            headerTitle: "My application WITHOUT Context Api",
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

export const MyPage = () => {
   const [theme,setTheme] = useState(initialTheme);
   const [language, setLanguage] = useState(initialLanguage)
   const [texts, setTexts] = useState(language);

   console.log(texts);

   const handleTheme = (e) => {
    console.log(e.target.value);
    if(e.target.value === "light"){
        setTheme("light")
    }else{
        setTheme("dark")
    }
   };

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}/>
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
