import { useState, useContext, createContext } from "react";
import { UserContext } from "./App";
import { AdminChat } from "./AdminChat";
import { ChatBox } from "./ChatBox";
export function MainPage() {
  const { page, setPage } = useContext(UserContext);
  const handle = () => {
    setPage(page === "userpage" ? "admin" : "userpage");
  };
  return (
    <div>
      <button className="changeButton" onClick={handle}>
        {page === "userpage" ? "Switch Admin" : "Switch User"}
      </button>
      {page === "userpage" && <ChatBox />}
      {page === "admin" && <AdminChat />}
    </div>
  );
}
