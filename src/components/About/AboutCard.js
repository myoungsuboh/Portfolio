import React from "react";
import Card from "react-bootstrap/Card";
import { RiNotification2Fill } from "react-icons/ri";

function AboutCard() {
  const returnBR = getText => {
    return (
      <>
        {getText}
        <br />
      </>
    );
  };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {returnBR("안녕하세요.")}
            {returnBR("저는 호기심이 많은 Front End 개발자 오명섭입니다.")}
            {returnBR("궁금한게 생긴다면 계속해서 생각하고, 찾아보는 성격입니다.")}
            {returnBR("이러한 성격 덕분에 언어 전환을 하게되었으며,")}
            {returnBR("여러 스킬을 습득하게 되었습니다.")}
            <br />
          </p>
          <ul>
            <h1 style={{ fontSize: "1.5em", paddingBottom: "20px" }}>
              <strong> My Programmer Philosophy </strong>
            </h1>
            <li className="about-activity">
              <RiNotification2Fill /> 재사용이 가능한 코드
            </li>
            <li className="about-activity">
              <RiNotification2Fill /> 오류 발생시 명확한 전달
            </li>
            <li className="about-activity">
              <RiNotification2Fill /> 소통이 편한 사람
            </li>
          </ul>

          <p className="blockquote-footer">
            The developer who maintains my source would be a radical psychopath
            <br />
            'who knows where I live.!'
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
