import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

function Home2() {
  const purple = getText => {
    return <span className="purple">{getText}</span>;
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <MainFotterStyle>
              <h1 style={{ fontSize: "2.6em" }}>{purple("INTRODUCE")}</h1>
              <p className="home-about-body">
                안녕하세요.
                <br />
                <br />
                {purple("React, C# ")}을 주로 다루고있으며,{" "}
                {purple("Functional Component")} 를 지향하는
                <br />
                Front End Developer 입니다.
                <br />
                <br />
                얼마전 {purple("APP")}에 관심이 생겨 퇴근 후 React Native 조금씩
                배워가고있습니다.
                <br />
              </p>
            </MainFotterStyle>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/myoungsuboh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/po12022/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const MainFotterStyle = styled.div`
  .purple {
    color: #bcc77b !important;
  }
`;
export default Home2;
