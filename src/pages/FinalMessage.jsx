import img1 from "../assets/finalphotos/img1.jpg";
import img2 from "../assets/finalphotos/img2.jpg";
import img3 from "../assets/finalphotos/img3.jpg";
import img4 from "../assets/finalphotos/img4.jpg";
import img5 from "../assets/finalphotos/img5.jpg";
import img6 from "../assets/finalphotos/img6.jpg";
import img7 from "../assets/finalphotos/img7.jpg";
import img8 from "../assets/finalphotos/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const FinalMessage = () => {
  return (
    <div
      style={{
        backgroundColor: "#330000",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "850px",
          marginBottom: "3rem",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`memory-${index}`}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.25)",
            }}
          />
        ))}
        {/* Optional: filler for last empty grid cell */}
        <div style={{ visibility: "hidden" }} />
      </div>

      {/* Final Message */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          padding: "2rem 1.2rem",
          borderRadius: "24px",
          maxWidth: "850px",
          fontFamily: "'Dancing Script', cursive",
          fontSize: "1.2rem",
          lineHeight: "2.1rem",
          textAlign: "center",
          textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 12px rgba(255, 215, 0, 0.2)",
        }}
      >
        Happy, happy, happiest birthday to the bestest girl in the whole universe. 💛
        <br /><br />
        Mandira, on this very special day of yours, I just want to remind you how incredibly special you are. You truly deserve the best of everything—every little joy, every bit of love, every dream you hold close to your heart.
        <br /><br />
        All I want is to keep you happy, always. You're worth every single effort in this world. Your caring, soft, and protective nature has been the biggest strength of our relationship. You've held us together in the gentlest ways, and I’m forever grateful for that.
        <br /><br />
        Thank you… for walking into my life so unexpectedly and brightening it in ways I never imagined. You brought light, warmth, and so much love.
        <br /><br />
        And today, I make you a promise—
        No matter what happens, I’ll always stay by your side.
        Even if you try to push me away, you’ll still find me there… standing outside the window, watching over you from a distance, silently cheering you on.
        <br /><br />
        I’ll always be there—sometimes to make you laugh, sometimes to share a tear or two… like maybe I’m doing right now?
        <br /><br />
        Mandira, you are truly an amazing person—my inspiration, my comfort, my everything.
        <br /><br />
        From here on, things will only get better. As long as we’re together, I know we’ll achieve everything we once dreamt of.
        <br /><br />
        So today, don’t be too emotional. Just smile, be happy, and celebrate you. You’re 19 now… a full-fledged adult! Did you hear them calling you “baa”? Look at you growing up so beautifully!
        <br /><br />
        I’m sorry for any mistakes I’ve made, and more than anything—thank you. Thank you for being in my life.
        <br /><br />
        Happy Birthday once again, my Mandira. I love you. 💛
      </div>
    </div>
  );
};

export default FinalMessage;
