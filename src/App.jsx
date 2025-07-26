import { useRef, useState, useEffect } from "react";
import Countdown from "./pages/Countdown";
import BirthdayScreen from "./pages/BirthdayScreen";
import RevealCakeScreen from "./pages/RevealCakeScreen";
import WishGrantedScreen from "./pages/WishGrantedScreen";
import Timeline from "./pages/Timeline";
import BirthdayWishes from "./pages/BirthdayWishes";
import FinalMessage from "./pages/FinalMessage";
import birthdaySong from "./assets/happy-birthday.mp3";

function App() {
  const [page, setPage] = useState("countdown");
  const audioRef = useRef(null);

  // ✅ Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goToBirthday = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setPage("reveal");
  };

  return (
    <>
      {page === "countdown" && <Countdown onComplete={() => setPage("reveal")} />}
      {page === "reveal" && (
        <BirthdayScreen
          onNext={() => {
            goToBirthday();
            setPage("cake");
          }}
        />
      )}
      {page === "cake" && (
        <RevealCakeScreen onWishGranted={() => setPage("wish")} />
      )}
      {page === "wish" && <WishGrantedScreen onNext={() => setPage("timeline")} />}
      {page === "timeline" && <Timeline onNext={() => setPage("wishes")} />}
      {page === "wishes" && <BirthdayWishes onNext={() => setPage("final")} />}
      {page === "final" && <FinalMessage />}

      {/* 🎶 Global Audio */}
      <audio ref={audioRef} src={birthdaySong} preload="auto" />
    </>
  );
}

export default App;
