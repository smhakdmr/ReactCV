import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import profilePic from "../images/profilePic.png"
import { Card, CardBody, CardHeader, Col, Row, Container } from "reactstrap";
import Surprise from "./Surprise";

const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.about || "";
  const hello = resumeBasicInfo?.description_header || "";
  const about = resumeBasicInfo?.description || "";
  const [counter, setCounter] = useState(0);

  // const handleClick1 = () => {
  //   // Counter state is incremented
  //   setCounter(counter + 1);

  //   if (counter == 5) {
  //     setCounter(0)
  //     return <Surprise />
  //   }
  // };

  useEffect(() => {
    if (counter == 5) {
      setCounter(0)
    }
  }, [counter])

  return (
    <section id="about">
      <h1 style={{ color: "white" }}>
        <span>{sectionName}</span>
      </h1>
      <Row>
        <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div className="polaroid">
            <span style={{ cursor: "auto" }}>
              <img
                height="250px"
                src={profilePic}
                alt="İlyas Semih Akdemir"
                onClick={() => {
                  console.log("counter : ", counter);
                  setCounter(counter + 1);
                  // handleClick1
                }}
              />
              {counter == 4 && <Surprise />}
              <Icon
                icon="skill-icons:dotnet"
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon="devicon:react"
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon="vscode-icons:file-type-sql"
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
            </span>
          </div>
        </Col>
        <Col></Col>
        <Col
          md={7}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card>
            <CardHeader>
              <Icon
                icon="twemoji:red-circle"
                data-inline="false"
              />
              {" "}
              &nbsp;{" "}
              <Icon
                icon="twemoji:yellow-circle"
                data-inline="false"
              />
              {" "}
              &nbsp;{" "}
              <Icon
                icon="twemoji:green-circle"
                data-inline="false"
              />
            </CardHeader>
            <CardBody
              className="font-trebuchet ml-3 mr-3"
              style={{
                textAlign: "justify",
                height: 'auto',
                fontSize: '130%',
                lineHeight: '200%'
              }}
            >
              <br />
              <span className="wave">{hello}</span>
              <br />
              <br />
              {about}
            </CardBody>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default About;
