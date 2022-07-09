import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../private-route";
import Book from "../../pages/book";
import Home from "../../pages/home";
import Entry from "../../pages/entry";
import SignUp from "../../pages/sign-up";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Entry />} />
          <Route path=":bookId" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
