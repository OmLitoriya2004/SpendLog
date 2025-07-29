import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Home from "./pages/Dashboard/Home.jsx";
import Income from "./pages/Dashboard/Income.jsx";
import Expense from "./pages/Dashboard/Expense.jsx";
import UserProvider from "./hooks/userContext.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster 
        toastOptions={{
          className:"",
          style : {
            fontSize : "13px",
          },
        }}
      />
    </UserProvider>
  );
}
export default App;

const Root=()=>{
  const isAuthenticated=!!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
