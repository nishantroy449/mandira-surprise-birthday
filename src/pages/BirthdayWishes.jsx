import { useEffect } from "react";
import wishesImage from "../assets/wishes-top.jpg"; // Replace with actual image
import { FaWhatsapp } from "react-icons/fa";

const wishes = [
  {
    name: "Gungun",
    message:
      "Wishing you the happiest and most beautiful birthday! \uD83C\uDF38\uD83C\uDF82 Though you may not be officially a part of our family yet, it already feels like you belong with us. Watching the bond between you and my brother grow has been something truly special... Your almost-sister"
  },
  {
    name: "Puski Di",
    message:
      "Wishing you a lot of happiness and joy. May you enjoy your year with your bright smile. Wishing you A Very Happy Birthday \uD83C\uDF82\uD83C\uDF89\uD83E\uDD73\u2764\uFE0F"
  },
  {
    name: "Daksh",
    message:
      "Happyy birthday Mandira Baa \uD83E\uDD0D\u2728\uFE0F\uD83C\uDF8A hope you enjoy your day and always be happy with my brother \uD83E\uDD1E\uD83E\uDD1D\uD83D\uDE0A"
  },
  {
    name: "Gunjan",
    message: "Happy Birthday didi. I wish u a successful future \uD83C\uDF88\uD83C\uDF70."
  },
  {
    name: "Preetom",
    message: "A very Happy birthday to co-founder of Padam-dioxide \uD83E\uDDD3\uD83C\uDFFC"
  },
  {
    name: "Nilu",
    message:
      "Wishing you the happiest of birthdays! May your day be filled with joy and laughter. HAPPY BIRTHDAY MANDIRA (Nishant lgt jate bia khon joldi houk Xunkale jate khabo pau \uD83D\uDE05)"
  },
  {
    name: "Lipshita Bora",
    message:
      "Wishing you a very Happy Birthday dear!! We may not talk often, but I really like your companion. Hope to meet soon together with our buddies \u263A\uFE0F May your day be filled with happiness, and the year ahead bring you lots of success and beautiful moments \uD83C\uDF82\uD83C\uDF81\uD83C\uDF6D"
  },
  {
    name: "Amlan",
    message:
      "Happy birthday Mandira .... may god bless you and you throw us the party \uD83D\uDE02... anyways enjoy your day and be blessed."
  },
  {
    name: "Bhanitabh",
    message:
      "Tumar husband tu kintu dine dine nibba hoi goi ase, ki ki je kori ase nohoi birthday namot\u263A\uFE0F. Anyways happy birthday to you\uD83D\uDEA8"
  },
  {
    name: "Suborna Chandilya",
    message: "Happy Birthday Mandira \uD83D\uDC95"
  },
  {
    name: "Rifa Tamanna",
    message:
      "Heyyy!! Happiest birthday. Wishing you tons and tons of success in the future and sadha sukhi raho with my bhai Nishant \uD83E\uDD79"
  },
  {
    name: "Ariyan Sharmah",
    message:
      "Happy Birthday \uD83C\uDF82\uD83C\uDF82\uD83C\uDF82 may god bless you and fulfill all your dreams soon \u2728 keep smiling and keep rocking \uD83D\uDCAA enjoy \uD83C\uDF82\u2764\uFE0F"
  },
  {
    name: "Agnimitra",
    message:
      "Happy birthday dear Mandira\uD83D\uDC95\u2026\u2026keep being the awesome sweet person u are\uD83E\uDDE2"
  },
  {
    name: "Ankur Paul",
    message: "Happy Birthday Mandira \uD83C\uDF89\uD83C\uDF89"
  },
  {
    name: "Kripa",
    message:
      "Happy birthday behen IK toi khong t aso bht but trust me bey never meant to hurt you .... lot's of love and if u ever feel like talking I am still just a txt away\u2764\uFE0F and sorry really sorry"
  },
  {
    name: "Himtushar",
    message: "Happy Birthday Mandira \uD83E\uDD73\uD83C\uDF89 & enjoy your day \uD83E\uDD73\uD83C\uDF88"
  },
  {
    name: "Prince",
    message: "hbd"
  }
];

const BirthdayWishes = ({ onNext }) => {
  return (
    <div style={{ backgroundColor: "#800000", color: "white", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
        Birthday Wishes ❤️
      </h1>

      <img
        src={wishesImage}
        alt="Wishes Top"
        style={{ width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "12px", marginBottom: "2rem" }}
      />

      {wishes.map((wish, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            marginBottom: "1.5rem",
            boxShadow: "0 0 10px rgba(255,255,255,0.2)",
            position: "relative"
          }}
        >
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8rem" }}>{wish.message}</p>
          <p style={{ textAlign: "right", marginTop: "1rem", fontWeight: "bold" }}>- {wish.name}</p>

          {/* WhatsApp Share Button */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(wish.message + "\n- " + wish.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              color: "#25D366",
              fontSize: "1.5rem"
            }}
          >
            <FaWhatsapp />
          </a>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
          The Final Message 💌
        </button>
      </div>
    </div>
  );
};

export default BirthdayWishes;