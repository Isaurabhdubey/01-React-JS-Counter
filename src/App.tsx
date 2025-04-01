import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      setCount(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <>
      <button onClick={() => setIsActive(true)}>Click Me</button>
      <button onClick={() => setIsActive(false)}>Reset</button>
      <span>{count}</span>
    </>
  );
}

export default App;
