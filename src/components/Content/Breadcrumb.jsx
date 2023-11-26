import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
const Breadcrumb = (props) => {
  const path = props.path;
  const navigate = useNavigate();
  console.log("path type", typeof path);
  console.log(path);
  const num = window.innerWidth <= 768 ? 1 : 2;
  return (
    <Breadcrumbs
      separator={
        <svg
          class=" a-s-fa-Ha-pa c-qd"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          focusable="false"
          fill="currentColor"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      }
      aria-label="breadcrumb"
    >
      {path.length > num && (
        <div className="rounded-5 hover p-1 dropdown ">
          <div
            role="button"
            className=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-disabled="false"
            aria-haspopup="true"
            // data-bs-offset="-10,-60"
          >
            <svg
              class=" c-qd"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              focusable="false"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
          <ul className="dropdown-menu shadow-sm border-0">
            {path.map((p, index) => {
              if (index < path.length - num)
                return (
                  <li>
                    <button
                      onClick={() => navigate(`/folders/${p.id}`)}
                      className="btn text-start dropdown-item d-flex"
                      style={{ width: "100%" }}
                    >
                      {p.name}
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
      )}
      {path.map((p, index) => {
        if (path.length <= num || index >= path.length - num)
          return (
            <h4
              onClick={() => navigate(`/folders/${p.id}`)}
              className="breadcrumb-item m-0 rounded-5 px-3 hover py-1  text-truncate"
              style={{ maxWidth: "240px" }}
            >
              {p.name}
            </h4>
          );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;