import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navbar from "./components/Navbar/navbar";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyle from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import useThemeMode from "./hooks/useThemeMode";
import Project from "./routes/project";
import Lecture from "./routes/lecture";
import Auth from "./routes/auth";

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navbar themeToggler={themeToggler} />}>
            <Route index element={<Home />}></Route>
            <Route path="/projects" element={<Project />}></Route>
            <Route path="/lectures" element={<Lecture />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
