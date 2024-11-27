import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./context/userContext.jsx";
import { CategoryContextProvider } from "./context/categoriesContext.jsx";
import { CityAreaContextProvider } from "./context/cityAreaContext.jsx";
import { PostAdContextProvider } from "./context/postAdContext.jsx";
import { TypeContextProvider } from "./context/typeContext.jsx";
import { CityContextProvider } from "./context/cityContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <UserContextProvider>
        <CategoryContextProvider>
          <CityAreaContextProvider>
            <PostAdContextProvider>
              <TypeContextProvider>
                <CityContextProvider>
                  <App />
                </CityContextProvider>
              </TypeContextProvider>
            </PostAdContextProvider>
          </CityAreaContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </StrictMode>
  </BrowserRouter>
);
