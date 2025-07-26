import { useEffect, useState } from "react";

const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => onComplete(), 1000);
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div
      className="bg-black text-white"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "15rem",
          fontWeight: "900",
          margin: 0,
        }}
      >
        {count}
      </h1>
    </div>
  );
};

export default Countdown;
