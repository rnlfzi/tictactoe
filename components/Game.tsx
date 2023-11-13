"use client";

import React, { useState } from "react";
import Board from "./Board";

function Game(): JSX.Element {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const playerX: boolean = currentMove % 2 === 0;
  const activeSquare: (string | null)[] = history[currentMove];

  const handlePlay = (next: (string | null)[]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), next];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const reset = (): void => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          playerX={playerX}
          squares={activeSquare}
          onPlay={handlePlay}
          onReset={reset}
        />
      </div>
    </div>
  );
}

export default Game;
