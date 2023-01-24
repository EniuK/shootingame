import { useState, MouseEvent, useEffect } from "react";
import { start } from "repl";
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
  const [tick, setTick] = useState(true);
  const placeEnemy = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setTick(!tick);
    const client = {
      top: clientY,
      left: clientX,
      width: 150,
      height: 150,
    };

    setEnemies([...enemies, client]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);

      const hehe = enemies.map((enemy) => {
        console.log(enemy);
        return {
          ...enemy,
          height: enemy.height + 100,
          width: enemy.width + 100,
        };
      });
      console.log(hehe);
      setEnemies(hehe);
    }, 1000);
    return () => clearInterval(interval);
  }, [tick, time]);

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
