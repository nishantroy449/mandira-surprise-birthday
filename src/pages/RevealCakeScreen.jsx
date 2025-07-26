// RevealCakeScreen.jsx
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Lottie player
import cakeAnimation from "../assets/Birthday cake.json";

const RevealCakeScreen = ({ onWishGranted }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleBlowCandles = () => {
    // ⏭️ Move to next screen after 2s instead of 10s
    setTimeout(() => {
      onWishGranted();
    }, 2000);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#800000",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Player
        autoplay
        loop
        src={cakeAnimation}
        style={{ height: "350px", width: "350px" }}
      />

      {showPopup && (
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            Blow the candles and make a wish!
          </h2>
          <button
            onClick={handleBlowCandles}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              backgroundColor: "#ff4081",
              border: "none",
              borderRadius: "12px",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255, 64, 129, 0.7)",
            }}
          >
            Blow Candles 🎉
          </button>
        </div>
      )}
    </div>
  );
};

export default RevealCakeScreen;
