import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "./userContext";

const CityContext = createContext();
export const CityContextProvider = ({ children }) => {
  const [Cities, setCities] = useState([]);
  const { isAuth } = UserData();
  useEffect(() => {
    if (isAuth) {
      getCities();
    }
  }, [isAuth]);
  const getCities = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:5000/api/cities", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });

        if (!response.ok) throw new Error("Error while getting cities");

        const data = await response.json();
        console.log(data);

        setCities(data.data);
        console.log(Cities);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <CityContext.Provider value={{ Cities }}>{children}</CityContext.Provider>
  );
};
export const CitiesData = () => useContext(CityContext);
