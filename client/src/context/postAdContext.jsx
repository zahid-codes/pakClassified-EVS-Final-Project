import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "./userContext";
const PostAdContext = createContext();

export const PostAdContextProvider = ({ children }) => {
  const { isAuth } = UserData();

  const [Advertisements, setAdvertisements] = useState([]);
  const [Advertisement, setAdvertisement] = useState([]);
  const [AdError, setAdError] = useState("");
  const [del, setdel] = useState(false);

  //toast states
  const [AdshowToast, setAdshowToast] = useState(false);
  const [AdtoastMessage, setAdtoastMessage] = useState("");

  useEffect(() => {
    GetAll();
  }, []);
  async function Add(formData) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5000/api/advertisements", {
        method: "POST",
        headers: {
          token: token,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) setAdError(data.message);
      await GetAll();
    } catch (error) {
      console.log(error.message);
      setAdError(data.message);
    }
  }

  async function GetAll() {
    try {
      const response = await fetch("http://localhost:5000/api/advertisements", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Error while getting advertisements");

      const data = await response.json();

      setAdvertisements(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function GetAd(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/advertisements/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Error while getting advertisement");

      const data = await response.json();
      // console.log(data);

      setAdvertisement(data);
      if (data != "") {
        return data;
      }
      // console.log(Advertisement);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function updateAd(AdvId, formData) {
    const token = localStorage.getItem("token");
    try {
      if (AdvId && token) {
        const response = await fetch(
          `http://localhost:5000/api/advertisements/${AdvId}`,
          {
            method: "PUT",
            headers: {
              token: token,
            },
            body: formData,
          }
        );
        const data = await response.json();
        if (!response.ok) {
          console.log("error updating advertisement");

          throw new Error(data.message);
        }
        console.log("Advertisement Updated successfully");

        setAdvertisement(data.data);
        setAdtoastMessage(`Advertisement Updated Successfully`);
        setAdshowToast(true);
        await GetAll();
      }
    } catch (error) {
      console.log("Error while updating advertisement");
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  async function deleteAd(id) {
    const token = localStorage.getItem("token");
    try {
      if (id && token) {
        const response = await fetch(
          `http://localhost:5000/api/advertisements/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          console.log("error deleting advertisement");
          throw new Error(data.message);
        }
        console.log("Advertisement deletion successfull");
        setAdtoastMessage(`Advertisement Deleted Successfully`);
        setAdshowToast(true);
        setdel(true);
        await GetAll();
      }
    } catch (error) {
      console.log("Error while deleting advertisement");
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  return (
    <PostAdContext.Provider
      value={{
        Add,
        Advertisements,
        Advertisement,
        GetAd,
        updateAd,
        deleteAd,
        AdError,
        AdshowToast,
        setAdshowToast,
        AdtoastMessage,
        setAdtoastMessage,
        del,
        setdel,
      }}
    >
      {children}
    </PostAdContext.Provider>
  );
};
export const PostAdData = () => useContext(PostAdContext);
