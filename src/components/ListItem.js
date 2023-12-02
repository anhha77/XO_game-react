import React from "react";

function ListItem({ index, handleMove }) {
  return (
    <>
      <li>
        {!index ? (
          <button onClick={() => handleMove(index)}>
            {"Go to game start"}
          </button>
        ) : (
          <button
            onClick={() => handleMove(index)}
          >{`Go to move #${index}`}</button>
        )}
      </li>
    </>
  );
}

export default ListItem;
