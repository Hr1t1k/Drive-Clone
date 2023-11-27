import React from "react";
import useLayout from "../../context/LayoutContext";

const Layout = () => {
  const { grid, setGrid } = useLayout();

  return (
    <div
      className="layout p-1"
      onClick={() => {
        window.localStorage.setItem("grid", !grid);
        setGrid(!grid);
      }}
    >
      {grid && (
        <svg
          className="a-s-fa-Ha-pa c-qd"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          focusable="false"
          fill="currentColor"
        >
          <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"></path>
        </svg>
      )}
      {!grid && (
        <svg
          className="a-s-fa-Ha-pa c-qd"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2,5v14h20V5H2z M14,7v4h-4V7H14z M4,7h4v4H4V7z M16,11V7h4v4H16z M4,17v-4h4v4H4z M10,17v-4h4v4H10z M20,17 h-4v-4h4V17z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      )}
    </div>
  );
};

export default Layout;
