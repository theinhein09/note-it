import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../private-route";
import Book from "../../pages/book";
import Home from "../../pages/home";
import Entry from "../../pages/entry";
import SignUp from "../../pages/sign-up";
import Profile from "../../pages/profile";
import { StrictMode } from "react";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <StrictMode>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </StrictMode>
            }
          />

          <Route
            path="sign-up"
            element={
              <StrictMode>
                <SignUp />
              </StrictMode>
            }
          />
          <Route
            path="login"
            element={
              <StrictMode>
                <Entry />
              </StrictMode>
            }
          />
          <Route
            path="profile"
            element={
              <StrictMode>
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              </StrictMode>
            }
          />
          <Route path=":bookId" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
