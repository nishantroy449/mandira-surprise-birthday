import { Player } from "@lottiefiles/react-lottie-player";
import confettiAnimation from "../assets/Confetti.json";

const BirthdayScreen = ({ onNext }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#800000", // maroon color
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Player
        autoplay
        loop
        src={confettiAnimation}
        style={{ height: "300px", width: "300px" }}
      />
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", margin: "2rem 0" }}>
        Happy Birthday Mandira!
      </h1>
      <button
        onClick={onNext}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          backgroundColor: "#ff4081",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          color: "white",
          boxShadow: "0 0 10px rgba(255, 64, 129, 0.7)",
        }}
      >
        Let&apos;s cut the cake 🎂
      </button>
    </div>
  );
};

export default BirthdayScreen;
