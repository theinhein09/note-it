import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorContextProvider } from "../../contexts/error-context";
import Dashboard from "../../pages/dashboard";
import Entry from "../../pages/entry";

const App = (props) => {
  return (
    <ErrorContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Entry />} />
            <Route path=":userId">
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorContextProvider>
  );
};

export default App;
