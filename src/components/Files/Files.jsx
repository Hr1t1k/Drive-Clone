import React from "react";
import MenuDots from "../MenuDots";
import "./file.css";
import RenameFile from "./RenameFile";
import auth from "../../../firebasecofig";
export default (props) => {
  const grid = props.grid;
  const file = props.file;
  return (
    <>
      <RenameFile file={file} />
      <div className={`${grid ? "file-box" : "list"} p-0 m-0`}>
        <div className={`${grid && "file-content rounded-3"} p-0`}>
          <div
            className={`file-header ${
              grid && "d-flex"
            } align-items-center p-0 w-100  position-relative ${
              !grid && "list-header d-grid"
            }`}
          >
            <div
              className="d-flex align-items-center overflow-hidden text-nowrap"
              style={{ width: "85%" }}
            >
              <img
                className=" m-3  p-0 "
                width={21}
                src="https://drive-thirdparty.googleusercontent.com/32/type/image/jpeg"
                alt="Image"
                height={18}
              ></img>
              <p className="p-0 m-0">{file.name}</p>
            </div>
            {!grid && (
              <>
                <p className="d-none d-md-flex gap-1 text-truncate text-nowrap">
                  <img
                    src={file.ownerPic}
                    height="24px"
                    width="24px"
                    style={{ borderRadius: "50%" }}
                  />
                  {file.owner == auth.currentUser.uid ? "me" : file.ownerName}
                </p>
                <p className="d-none d-sm-grid">{file.lastModifiedDate}</p>
                <p className="d-none d-md-grid">-</p>
              </>
            )}
            <MenuDots file={file} />
          </div>
          {grid && (
            <div className="file-body rounded-2 d-flex align-items-center justify-content-center mx-2 ">
              <img
                jsaction=""
                className=" p-3"
                src="https://drive-thirdparty.googleusercontent.com/64/type/image/jpeg"
                alt=""
              ></img>
            </div>
          )}
        </div>
      </div>
      {!grid && <hr className="m-0 p-0" />}
    </>
  );
};
