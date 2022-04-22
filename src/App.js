import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import styles from "./styling/main.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />}></Route>
          <Route path="/user" element={<LoggedInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
