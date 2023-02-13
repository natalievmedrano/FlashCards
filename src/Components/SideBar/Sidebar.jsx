import React from "react";
import Collection from "../Collection/Collection";
import "./SideBar.css";

function SideBar({ collections,getAllCards }) {
  return (
    <div id="sideBar">
      {collections.map((collection) => {
        return <Collection collection={collection} getAllCards={getAllCards}/>;
      })}
    </div>
  );
}

export default SideBar;
