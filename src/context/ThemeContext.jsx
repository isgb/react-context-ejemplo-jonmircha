import { Children, createContext } from "react";
import ThemeContext from '../context/ThemeContext'

const initialTheme = "light";
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);
    const handleTheme = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "light") {
          setTheme("light")
        } else {
          setTheme("dark")
        }
      };

    const data = {theme, handleTheme}

    return (
        <ThemeContext.Provider
            value={data}
        >
            {children}
        </ThemeContext.Provider>
    )
    

}

export default ThemeContext();