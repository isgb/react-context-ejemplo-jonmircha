import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const initialTheme = "light";

export const MyPage = () => {
   const [theme,setTheme] = useState(initialTheme);

   const handleTheme = (e) => {}

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}/>
      <Main theme={theme} handleTheme={handleTheme}/>
      <Footer theme={theme} handleTheme={handleTheme}/>
    </div>
  );
};
