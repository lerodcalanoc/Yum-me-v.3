import React from "react";

export const ViewBtn = props => {
  return (
    <a href={props.link} target="_blank"> 
        <button className="btn btn-info view-btn">
            View Recipe
        </button>
    </a>
  )
}

