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
  const [tick, setTick] = useState(false);
  const placeEnemyRndomlyGenerated = (x: number, y: number) => {
    const spot = {
      top: x,
      left: y,
      width: 50,
      height: 50,
    };
    console.log(spot);
    setEnemies([...enemies, spot]);
    console.log("enemies");
  };
  const randomEnemyGenerator = () => {
    const number1 = Math.floor(Math.random() * (100 - 1) + 1);
    const numberX = Math.floor(Math.random() * (1400 - 1) + 1);
    const numberY = Math.floor(Math.random() * (700 - 100) + 100);

    // console.log(numberX);
    // console.log(numberY);
    number1 % 3 === 0
      ? placeEnemyRndomlyGenerated(numberX, numberY)
      : console.log("did not place enemy");
  };
  const placeEnemy = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    // console.log(clientX);
    // console.log(clientY);
    randomEnemyGenerator();
    const client = {
      top: clientY,
      left: clientX,
      width: 100,
      height: 100,
    };

    setEnemies([...enemies, client]);

    // setTick(!tick);
  };

  const intervalFunction = () => {
    setInterval(() => {
      randomEnemyGenerator();
      const hehe = enemies.map((enemy) => {
        return {
          ...enemy,
          height: enemy.height + 50,
          width: enemy.width + 50,
        };
      });
      setEnemies(hehe);
      console.log(enemies);
    }, 5000);
  };
  tick ? intervalFunction() : console.log("nope");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(time + 1);

  //     const hehe = enemies.map((enemy) => {
  //       return {
  //         ...enemy,
  //         height: enemy.height + 50,
  //         width: enemy.width + 50,
  //       };
  //     });
  //     setEnemies(hehe);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [tick, time]);
  // didnt do anything :D

  const helpMeeee = () => {
    if (tick === true) {
      return;
    }
    setTick(!tick);
  };
  return (
    <div className="App">
      <div className="menu">
        <button onClick={helpMeeee}>click to start</button>
      </div>
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
