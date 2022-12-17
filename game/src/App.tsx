import { useState, MouseEvent, useEffect } from "react";
import "./App.css";

type Enemy = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const App = () => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [time, setTime] = useState(1);
  const placeEnemy = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const client = {
      top: clientY,
      left: clientX,
      width: 150,
      height: 150,
    };

    setEnemies([...enemies, client]);
  };

  useEffect(() => {
    setInterval(() => {
      enemies.map((enemy) => {
        return (enemy.height = +1);
      });
    }, time);
  }, [enemies, time]);

  return (
    <div className="App">
      <div className="menu" />
      <div className="game" onClick={placeEnemy}>
        {enemies.map((enemy) => {
          const { top, left, width, height } = enemy;
          return (
            <div
              style={{
                top: top,
                left: left,
                background: "black",
                width: width + "px",
                height: height + "px",
                position: "absolute",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
