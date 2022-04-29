import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import "./styling/main.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DarkThemeProvider from "./context/DarkThemeContext/DarkThemeContext";
import { ListItemProvider } from "./context/ListItemContext/ListItemContext";

function App() {
  return (
    <DarkThemeProvider>
      <ListItemProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<LogInPage />}></Route>

              <Route path="/user" element={<LoggedInPage />}></Route>

              <Route path="/signup" element={<SignUpPage />}></Route>
            </Routes>
          </Router>
        </div>
      </ListItemProvider>
    </DarkThemeProvider>
  );
}

export default App;
