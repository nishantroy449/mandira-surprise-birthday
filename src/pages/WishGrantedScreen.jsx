import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Typewriter } from "react-simple-typewriter";
import burstConfetti from "../assets/Burst Confetti Balloon.json";

const WishGrantedScreen = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext(); // Automatically navigate after 10 seconds
    }, 20000); // 10 seconds to let animation finish

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#800000",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti Left */}
      <div style={{ position: "absolute", left: 0, top: 0, height: "100%" }}>
        <Player
          autoplay
          loop
          src={burstConfetti}
          style={{ height: "100%", width: "200px" }}
        />
      </div>

      {/* Confetti Right */}
      <div style={{ position: "absolute", right: 0, top: 0, height: "100%" }}>
        <Player
          autoplay
          loop
          src={burstConfetti}
          style={{ height: "100%", width: "200px" }}
        />
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", zIndex: 2 }}>
        Wish Granted 🎉
      </h1>

      {/* Typing Text */}
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "2rem",
          whiteSpace: "pre-wrap",
          maxWidth: "800px",
          zIndex: 2,
          lineHeight: "2.2rem",
        }}
      >
        <Typewriter
          words={[
            "For the princess who turned 19, here's wishing you all the blessings of the world... May all your dreams come true, your heart stay pure, and may life always treat you like the queen you are.",
          ]}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default WishGrantedScreen;
