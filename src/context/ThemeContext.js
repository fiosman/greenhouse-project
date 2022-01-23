import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("day");

  return (
    <ThemeContext.Provider
      value={{
        themeName: "night",
        setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
