import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import { useState, useContext, createContext } from "react";
import { UserContext } from "./App";
export function ChatBox() {
  const { inputArr, setInputArr, name, setName, handleClick } =
    useContext(UserContext);
  const styles = {
    alignSelf: "flex-end",
    backgroundColor: "white",
  };
  const styles2 = {
    backgroundColor: "yellow",
  };
  return (
    <div>
      <div className="ChatBox">
        {inputArr.map((a) => (
          <button
            style={a.uniqueness === "user" ? styles : styles2}
            class={a.uniqueness}
            role="button"
          >
            {a.name}
          </button>
        ))}
      </div>{" "}
      <div className="input_symbol">
        {" "}
        <Input
          sx={{
            height: 50,
            padding: 3,
            fontWeight: 650,
            backgroundColor: "green",
            borderRadius: "50px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <SendIcon onClick={() => handleClick("user")} />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}
