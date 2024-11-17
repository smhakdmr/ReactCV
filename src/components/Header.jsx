import React, { useState, useCallback } from "react";
import Typewriter from "react-typewriter-effect";
import Switch from "react-switch";
import { Icon } from "@iconify/react";
import { Col, Label, Row } from "reactstrap";

const Header = () => {
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const HeaderTitleTypeAnimation = useCallback(() => {
    return (
      <Typewriter
        textStyle={{
          fontFamily: "Raleway",
          color: "#272836",
          fontSize: "2em",
        }}
        startDelay={100}
        cursorColor="#3F3D56"
        multiText={["Full Stack Developer", "React Developer", ".Net Developer"]}
        multiTextDelay={1}
        typeSpeed={100}
      />
    );
  }, []);

  return (
    <header
      id="home"
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      {/* Üst İçerik */}
      <div>
        <Row>
          <Col md={12}>
            {/* Simgeler */}
            <Row>
              <Col id="headerIcon">
                <Icon color="#272836" width="10vh" icon="la:laptop-code" />
                <Icon color="#272836" width="10vh" icon="hugeicons:react" />
                <Icon color="#272836" width="10vh" icon="mdi:dot-net" />
              </Col>
            </Row>
            <br />
            {/* İsim */}
            <Row>
              <Col id="headerText"> 
                <Typewriter
                  textStyle={{
                    fontFamily: "Arial",
                    color: "#272836",
                    fontSize: "4.2em",
                  }}
                  startDelay={100}
                  cursorColor="#3F3D56"
                  multiText={["İlyas Semih Akdemir"]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                />
              </Col>
            </Row>
            <br />
            {/* Meslek Başlıkları */}
            <Row>
              <Col id="headerText">
                <HeaderTitleTypeAnimation />
              </Col>
            </Row>
            <br />
            <br />
            {/* Tema Değiştirme Switch */}
            <Row>
              <Col>
                <Switch
                  checked={checked}
                  onChange={onThemeSwitchChange}
                  offColor="#B5BAB6"
                  onColor="#353535"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <Icon
                      icon="material-symbols-light:clear-night"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#353239",
                      }}
                    />
                  }
                  checkedIcon={
                    <Icon
                      icon="meteocons:clear-day-fill"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#353239",
                      }}
                    />
                  }
                  id="icon-switch"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* İletişim Bilgileri */}
      <div
        style={{
          marginTop: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        id="headerIcon"
      >
        {/* E-posta */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Icon icon="ic:baseline-email" width="30" color="#272836" />
          <p style={{ fontSize: "1.2em", color: "#272836", margin: 0 }}>
            ilyassemihakdemir@gmail.com
          </p>
        </div>

        {/* LinkedIn */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Icon icon="mdi:linkedin" width="30" color="#272836" />
          <p style={{ fontSize: "1.2em", color: "#272836", margin: 0 }}>
            <a
              href="https://www.linkedin.com/in/ilyas-semih-akdemir-b29850180/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#272836" }}
            >
              linkedin.com/in/ilyassemihakdemir
            </a>
          </p>
        </div>

        {/* Konum */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Icon icon="mdi:map-marker" width="30" color="#272836" />
          <p style={{ fontSize: "1.2em", color: "#272836", margin: 0 }}>
            İstanbul, Türkiye
          </p>
        </div>
      </div>

      {/* Aşağı Kaydırma Alanı */}
      <Row style={{ marginTop: "30vh" }} id="headerIcon">
        <Icon
          color="#272836"
          width={50}
          icon="pajamas:scroll-down"
          onClick={() =>
            window.scrollTo({
              top: "900",
              behavior: "smooth",
            })
          }
        />
        <Label style={{ fontSize: "1.5em", color: "#272836", marginTop: "5px" }}>
          Aşağı kaydırınız...
        </Label>
      </Row>

      {/* Mobil Uyumluluk Stilleri */}
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: 20px;
          }

          .react-switch {
            margin: auto !important;
          }

          p {
            font-size: 1em !important;
          }

          h1 {
            font-size: 2.5em !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
