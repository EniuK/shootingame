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
  const [tick, setTick] = useState(true);
  const placeEnemyButHelping = () => {
    console.log("word");
  };
  const randomEnemyGenerator = () => {
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(number);
    number % 2 === 0 ? placeEnemyButHelping() : console.log("hihi");
  };
  const placeEnemy = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    randomEnemyGenerator();
    const client = {
      top: clientY,
      left: clientX,
      width: 100,
      height: 100,
    };

    setEnemies([...enemies, client]);

    setTick(!tick);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);

      const hehe = enemies.map((enemy) => {
        return {
          ...enemy,
          height: enemy.height + 50,
          width: enemy.width + 50,
        };
      });
      setEnemies(hehe);
    }, 1000);
    return () => clearInterval(interval);
  }, [tick, time]);
  // didnt do anything :D
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
