import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "../context/userContext";

const categoryContext = createContext();
export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const { isAuth } = UserData();
  useEffect(() => {
    getCategories();
    getCategory();
  }, []);
  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Error while getting categories");

      const data = await response.json();
      console.log(data);

      setCategories(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getCategory = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/categories/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Error while getting category");

      const data = await response.json();
      console.log(data);

      setCategory(data);
      console.log(category);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <categoryContext.Provider value={{ categories, category, getCategory }}>
      {children}
    </categoryContext.Provider>
  );
};
export const categoriesData = () => useContext(categoryContext);
