import React, { useState } from "react";
import "./App.css";

type Enemy = {
  top: number;
  left: number;
};

function App() {
  const [enemies, setEnemies] = useState<Enemy[]>([]);

  function placeEnemy(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setEnemies([
      ...enemies,
      {
        top: clientY,
        left: clientX,
      },
    ]);
  }
  console.log(enemies);
  return (
    <div className="App">
      <div className="menu"></div>
      <div className="game" onClick={placeEnemy}>
        {enemies.map((e) => {
          return (
            <div
              className="enemy"
              style={{
                top: e.top,
                left: e.left,
                background: "black",
                width: "100px",
                height: "100px",
                position: "absolute",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
