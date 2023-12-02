import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick, indexOfHistory }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square
            square={squares[indexOfHistory]["squares"][0]}
            handleClick={() => {
              handleClick(0);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][1]}
            handleClick={() => {
              handleClick(1);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][2]}
            handleClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            square={squares[indexOfHistory]["squares"][3]}
            handleClick={() => {
              handleClick(3);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][4]}
            handleClick={() => {
              handleClick(4);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][5]}
            handleClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            square={squares[indexOfHistory]["squares"][6]}
            handleClick={() => {
              handleClick(6);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][7]}
            handleClick={() => {
              handleClick(7);
            }}
          />
          <Square
            square={squares[indexOfHistory]["squares"][8]}
            handleClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
