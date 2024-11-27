import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "./userContext";

const CityAreaContext = createContext();
export const CityAreaContextProvider = ({ children }) => {
  const [CityAreas, setCityAreas] = useState([]);
  const { isAuth } = UserData();
  useEffect(() => {
    if (isAuth) {
      getCityAreas();
    }
  }, [isAuth]);
  const getCityAreas = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:5000/api/cityareas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });

        if (!response.ok) throw new Error("Error while getting city areas");

        const data = await response.json();
        console.log(data);

        setCityAreas(data.data);
        console.log(CityAreas);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <CityAreaContext.Provider value={{ CityAreas }}>
      {children}
    </CityAreaContext.Provider>
  );
};
export const CityAreaData = () => useContext(CityAreaContext);
