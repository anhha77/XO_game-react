import React, { useState, useEffect } from "react";
import Board from "./Board";
import ListItem from "./ListItem";

function Game() {
  const [squares, setSquares] = useState([{ squares: Array(9).fill(null) }]);
  const [indexOfHistory, setIndexOfHistory] = useState(0);
  const [isUndo, setIsUndo] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares[squares.length - 1].squares));
  }, [squares]);

  // Set X or O
  useEffect(() => {
    setXIsNext(indexOfHistory % 2 === 0);
  }, [indexOfHistory]);

  // Change squares when undo
  useEffect(() => {
    if (isUndo) {
      const historyOfSquares = squares.slice(0, indexOfHistory + 1);
      setSquares(historyOfSquares);
      setIsUndo(false);
    }
  }, [isUndo]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const historyOfSquares = squares.slice(0, indexOfHistory + 1);
    const current = historyOfSquares[historyOfSquares.length - 1];
    const currentSquares = current.squares.slice();
    if (winner) {
      return;
    } else {
      if (xIsNext) {
        currentSquares[i] = "X";
        const currentChange = { ...current, squares: currentSquares };
        setSquares(historyOfSquares.concat(currentChange));
      } else {
        currentSquares[i] = "O";
        const currentChange = { ...current, squares: currentSquares };
        setSquares(historyOfSquares.concat(currentChange));
      }
      setIndexOfHistory(indexOfHistory + 1);
    }
  };

  //Restart game
  const handleRestart = () => {
    setXIsNext(true);
    const restartSquares = { squares: Array(9).fill(null) };
    setSquares([restartSquares]);
    setIndexOfHistory(0);
  };

  // Click to move to previous move
  const handleMove = (index) => {
    setIndexOfHistory(index);
  };

  // Undo move
  const undoMove = () => {
    setIsUndo(true);
    setIndexOfHistory(indexOfHistory ? indexOfHistory - 1 : 0);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board
          squares={squares}
          handleClick={handleClick}
          indexOfHistory={indexOfHistory}
        />
        <div className="history">
          <h4>History</h4>
          <ul>
            {squares.map((element, index) => (
              <ListItem
                key={Date.now() + index}
                index={index}
                handleMove={handleMove}
              />
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
      <button onClick={undoMove} className="restart-btn">
        Undo
      </button>
    </div>
  );
}

export default Game;
