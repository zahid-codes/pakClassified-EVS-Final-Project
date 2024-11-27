import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [error, seterror] = useState("");
  const [ph_error, setph_error] = useState("");
  const [logout, setlogout] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  //toast states
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (isAuth || token) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, [isAuth, token]);
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const response = await fetch(
          "http://localhost:5000/api/user/verifytoken",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );

        if (!response.ok) throw new Error("Token is invalid or expired");

        const data = await response.json();
        setUser(data.user); // Assuming response contains user data
        setIsAuth(true);
        setLoading(false);
      } else {
        console.log("response was not ok");
        setLoading(false);
        setIsAuth(false);
        navigate("/login");
      }
    } catch (error) {
      console.log("hello from vt");
      console.log(error.message);
      localStorage.removeItem("token");
      setLoading(false);
      setIsAuth(false);
      setUser([]);
    }
  };
  async function loginUser(email, password) {
    setbtnLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        seterror(data.message);
        setIsAuth(false);
        setbtnLoading(false);
        setLoading(false);
        return;
      }
      setUser(data.data);
      localStorage.setItem("token", data.token);
      setIsAuth(true);
      navigate("/home");
      setbtnLoading(false);
      setLoading(false);
      // setToastMessage(`Welcome back ${user.name && user.name}`);
      setShowToast(true);
    } catch (error) {
      console.log(error.message);
      seterror(data.message);
      setIsAuth(false);
      setbtnLoading(false);
      setLoading(false);
      throw new Error(error.message);
    }
  }
  async function signupUser(formData) {
    // setbtnLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        seterror(data.message ? data.message : "");
        setph_error(data.num_message ? data.num_message : "");
        return;
      }
      console.log("user created successfully");

      navigate("/login");
      setToastMessage("User created successfully! Please login.");
      setShowToast(true);
      // setbtnLoading(false);
      // setLoading(false);
    } catch (error) {
      seterror(data.mesage);
      setToastMessage("Signup failed. Please try again.");
      setShowToast(true);
      console.log(error.message);
      // setbtnLoading(false);
      // setLoading(false);
      throw new Error(error.message);
    }
  }
  async function updateUser({ id, name, email, contactNumber, birthDate }) {
    const token = localStorage.getItem("token");
    try {
      if (id && token) {
        const response = await fetch(`http://localhost:5000/api/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: JSON.stringify({ name, email, contactNumber, birthDate }),
        });
        console.log("reached here");
        const data = await response.json();
        if (!response.ok) {
          console.log("error updating user");
          throw new Error(data.message);
        }
        setUser(data.data);
        setToastMessage("User Updated Succesfully");
        setShowToast(true);
        console.log("user data =" + user);
      }
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  async function handleLogout() {
    setlogout(true);
    setUser([]);
    setIsAuth(false);
    localStorage.clear("token");
    navigate("/login");
    setToastMessage("Logout Successful");
    setShowToast(true);
  }
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        loginUser,
        updateUser,
        btnLoading,
        Loading,
        signupUser,
        error,
        showToast,
        setShowToast,
        toastMessage,
        setToastMessage,
        handleLogout,
        logout,
        setlogout,
        ph_error,
        setph_error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserData = () => useContext(UserContext);
