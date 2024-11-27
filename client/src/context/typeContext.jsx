import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "./userContext";

const TypeContext = createContext();
export const TypeContextProvider = ({ children }) => {
  const [Types, setTypes] = useState([]);
  const { isAuth } = UserData();
  useEffect(() => {
    if (isAuth) {
      getTypes();
    }
  }, [isAuth]);
  const getTypes = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/advertisementtypes",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );

        if (!response.ok)
          throw new Error("Error while getting Advertisement Types ");

        const data = await response.json();
        console.log(data);

        setTypes(data.data);
        console.log(Types);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <TypeContext.Provider value={{ Types }}>{children}</TypeContext.Provider>
  );
};
export const TypesData = () => useContext(TypeContext);
