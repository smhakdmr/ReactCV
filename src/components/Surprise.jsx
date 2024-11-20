import React, { useEffect } from "react";
import ciftPicture from "../images/ciftPic.png"
// import "./Surprise.scss";

const Surprise = () => {
  useEffect(() => {
    const createHeart = () => {
      const container = document.querySelector(".surprise-container");
      if (!container) return;

      const heart = document.createElement("div");
      heart.className = "heart";

      // Rastgele konum
      heart.style.left = `${Math.random() * 100}%`;

      // Rastgele boyut ve hız
      const size = Math.random() * 30 + 20;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

      container.appendChild(heart);

      // Kalp belirli bir süre sonra silinir
      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    // Belirli aralıklarla kalpler oluştur
    const interval = setInterval(createHeart, 300);

    // 8 saniye sonra animasyon durur ve mesaj görünür
    setTimeout(() => {
      clearInterval(interval);
      document.querySelector(".message").classList.add("visible");
    }, 8000);

    // Tüm ekran animasyonu temizlenir
    setTimeout(() => {
      document.querySelector(".surprise-container").classList.add("fade-out");
    }, 11000);

    return () => clearInterval(interval); // Bileşen unmount olduğunda interval'ı temizle
  }, []);

  return (
    <div className="surprise-container">
      {/* <img
        height="250px"
        src={ciftPicture}
        className="message"
        style={{
          // marginLeft: "28vw",
          top: "30%",
          borderRadius: "15px"
        }}
      /> */}
      <h2 className="message">Seni çok seviyorum nişanlım ❤️</h2>
    </div>
  );
};

export default Surprise;
