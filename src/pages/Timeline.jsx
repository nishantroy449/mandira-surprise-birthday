import { useEffect } from "react";
import img1 from "../assets/timeline/img1.jpg";
import img2 from "../assets/timeline/img2.jpg";
import img3 from "../assets/timeline/img3.jpg";
import img4 from "../assets/timeline/img4.jpg";
import img5 from "../assets/timeline/img5.jpg";

const timelineData = [
  {
    id: 1,
    imageSide: "right",
    image: img1,
    message: `🍼 Baby Mandira\n
"No one had a clue that this tiny cutie with a dot on her head was going to grow up into a multi-talented queen who'd steal everyone's heart and top ranks too!"
\n[Secret power unlocked: Cuteness overload 💥👶💖]`
  },
  {
    id: 2,
    imageSide: "left",
    image: img2,
    message: `🚴‍♀️ The Little Gundi Phase\n
"Here comes Cycle Gundi Mandira—riding through the neighborhood like a boss, spreading chaos, smiles, and her ✨ legendary smirk ✨. If something went missing, you knew where to look!"
\n[Power move: Mischief Management ✅]`
  },
  {
    id: 3,
    imageSide: "right",
    image: img3,
    message: `🧸 The Soft Glow-Up Begins\n
"This is the Mandira who started getting calmer (just a little 👀), wiser, and cuter than ever! Exploring toy aisles and happiness like a true soft girl era champion 💛"
\n[Hobby: Making even plush toys jealous of her charm]`
  },
  {
    id: 4,
    imageSide: "left",
    image: img4,
    message: `💃 Bold, Aesthetic & Glowing\n
"Here enters the Modelra version—bold, graceful, and camera ready. White dress? Check. Confidence? Check. Vibe? Unmatched. Slaying like it’s her birthright!"
\n[Status: Main character energy 🎬✨]`
  },
  {
    id: 5,
    imageSide: "right",
    image: img5,
    message: `👑 The Ultimate Mandira\n
"And now… the final evolution—Mature. Talented. Wifey Material. Every version of her just got better and better. This is the Mandira who’ll win hearts, break stereotypes, and shine in whatever she does."
\n[Endgame unlocked: The world better be ready!]`
  }
];

const Timeline = ({ onNext }) => {
  useEffect(() => {
    const canvas = document.getElementById("dotted-line");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 1800;

    ctx.beginPath();
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    let x = canvas.width / 2;
    let y = 100;
    ctx.moveTo(x, y);
    for (let i = 0; i < 5; i++) {
      x = i % 2 === 0 ? x + 50 : x - 50;
      y += 250;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#800000",
        color: "white",
        padding: "2rem",
        position: "relative"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem"
        }}
      >
        Timeline Memories
      </h1>

      <div style={{ position: "relative" }}>
        <canvas
          id="dotted-line"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />

        {timelineData.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection:
                item.imageSide === "left" ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "150px",
              position: "relative",
              zIndex: 2
            }}
          >
            <img
              src={item.image}
              alt={`timeline-${item.id}`}
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)"
              }}
            />
            <div
              style={{
                maxWidth: "45%",
                padding: "1rem 2rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                fontSize: "1.1rem",
                lineHeight: "1.7rem",
                whiteSpace: "pre-line"
              }}
            >
              {item.message}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <button
            onClick={onNext}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#ff4081",
              border: "none",
              borderRadius: "12px",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255, 64, 129, 0.7)"
            }}
          >
            Let's read the birthday messages 💌
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
