import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const initialTheme = "light";

export const MyPage = () => {
   const [theme,setTheme] = useState(initialTheme);
  return (
    <div className="my-page">
      <Header theme={theme}/>
      <Main theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
};
