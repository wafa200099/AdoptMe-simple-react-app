import { createContext } from "react";
// const [theme,settheme]=usestate("brown")
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;