import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "../../pages/book";
import Home from "../../pages/home";
import Entry from "../../pages/entry";
import SignUp from "../../pages/sign-up";
import Profile from "../../pages/profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Entry />} />
          <Route path="profile" element={<Profile />} />
          <Route path=":bookId" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
