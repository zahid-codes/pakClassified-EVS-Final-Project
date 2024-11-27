import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../src/components/MainLayout";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Categories from "../src/components/Categories";
import CarDetails from "../src/components/CarDetails";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
import Error from "../src/components/Error";
import UserProfile from "../src/components/UserProfile";
import Otp from "../src/components/Otp";
import { UserData } from "./context/userContext";
import { useState } from "react";
import Loader from "./components/Loader";
import "../src/App.css";

function App() {
  const { isAuth, Loading } = UserData();
  const [otp, setOtp] = useState(false);
  // console.log(isAuth);
  const status = isAuth;
  // console.log(`staus : ${status}`);

  async function Isloggedin(val = status) {
    await val;
    console.log(`value of isAuth is: ${val}`);
    return val;
  }
  const is_logged_in = Isloggedin();

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/categories/:id" element={<Categories />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cardetails/:id" element={<CarDetails />}></Route>
            <Route
              path="/profile"
              element={isAuth ? <UserProfile /> : <Navigate to="/login" />}
            ></Route>
          </Route>
          <Route
            path="/signup"
            element={isAuth ? <Navigate to="/home" /> : <SignUp />}
          ></Route>
          <Route
            isAuth={isAuth}
            path="/login"
            element={isAuth ? <Navigate to="/home" /> : <Login />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
          <Route
            path="/otp"
            element={otp ? <Otp /> : <Navigate to="/home" />}
          ></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
