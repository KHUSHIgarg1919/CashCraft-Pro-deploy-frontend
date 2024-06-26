import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import axios from "axios";
import Register from "./pages/Register";


function App() {
  //axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  // axios.defaults.baseURL = 'https://cashcraftpro-mern.onrender.com/api/v1';
  axios.defaults.baseURL = process.env.REACT_APP_API_URL

  return (
    <>
      <Routes>
        <Route
          path="/"                                                    //path-'/' means home page
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;                  //redirect to login page
  }
}

export default App;
