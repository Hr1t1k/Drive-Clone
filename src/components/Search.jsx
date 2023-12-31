import React, { useState } from "react";
import "./search.css";
export default () => {
  const [searchText, setSearchText] = useState("");
  const [erase, setErase] = useState(false);
  return (
    <>
      <form
        className="d-flex  align-items-center w-100 h-5 m-2 ps-1 pe-4 input-group input-group-lg "
        style={{
          borderRadius: "70px",
          border: "1px solid transparent",
          maxWidth: "680px",
          backgroundColor: "rgb(237, 242, 252)",
        }}
        role="search"
      >
        <div className=" searchBtn">
          <svg
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            fill="rgb(68, 71, 70)"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </svg>
        </div>
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            if (event.target.value !== "") setErase(true);
            else {
              setErase(false);
            }
          }}
          className="form-control shadow-none"
          style={{
            backgroundColor: "transparent",
            border: "0px",
            fontSize: "16px",
            paddingLeft: "0px",
          }}
          placeholder="Search in Drive"
          aria-label="Search"
        />
        {erase && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setErase(false);
              setSearchText("");
            }}
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}
      </form>
    </>
  );
};
