import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "../../pages/book";
import Home from "../../pages/home";
import Entry from "../../pages/entry";
import SignUp from "../../pages/sign-up";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Entry />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path=":userId">
            <Route index element={<Home />} />
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
