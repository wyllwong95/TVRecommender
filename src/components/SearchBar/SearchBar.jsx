import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() != "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon}></SearchIcon>
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        placeholder={"Search a show you may like"}
        value={value}
      ></input>
    </>
  );
}
