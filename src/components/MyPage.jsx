import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const initialTheme = "light";

export const MyPage = () => {
   const [theme,setTheme] = useState(initialTheme);

   const handleTheme = (e) => {
    console.log(e.target.value);
   }

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}/>
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
