import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChatBox } from "./ChatBox";
import "./App.css";

import { MainPage } from "./MainPage";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import { Signin } from "./Signin";
import { Signup } from "./Signup";

export const UserContext = createContext();

function App() {
  const [inputArr, setInputArr] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState("userpage");
  const handleClick = (val) => {
    if (name !== "") {
      setInputArr([...inputArr, { name, uniqueness: val }]);
      setName("");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            inputArr,
            setInputArr,
            name,
            setName,
            handleClick,
            page,
            setPage,
          }}
        >
          <Routes>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Signin />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
