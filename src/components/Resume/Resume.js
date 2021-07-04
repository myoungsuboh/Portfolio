import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/myoungsubOh.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resumecontent(props) {
  const { company, career, content } = props;
  return (
    <div className="resume-item">
      <h5 className={company ? "resume-title" : "resume-no-title"}>
        {company}
      </h5>
      <p>
        <em>{career}</em>
      </p>
      <ul>
        {content.map((value, index) =>
          index % 2 === 0 ? (
            <li key={index}> ‣ {value}</li>
          ) : (
            <>
              <li key={index}>&nbsp; &nbsp;- {value}</li>
              <br />
            </>
          )
        )}
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h3 className="resume-title">Experience</h3>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <Resumecontent
              company="밀리언웨어"
              career="2019-10-01 ~ 재직중"
              content={[
                `GIPMS 유지보수 및 개발(진행중)`,
                `장비/설비/예방정비를 관리하는 시스템`,
                `Metering 시스템 개발`,
                `Resource 사용 비율과 금액 비용 절감을 도와주는 시스템`,
                `AICC 시스템 개발`,
                `반도체 데이터를 대학교 교육용으로 지원하는 시스템 `,
                `Hynix Cloud System 개발`,
                `Hynix Cloud System 환경 구축`
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <Resumecontent
              company="더블유엔피"
              career="2019-05-01 ~ 2019-09-01"
              content={[
                `기숙사 관리 시스템(Winform)`,
                `학생의 출입 데이터를 실시간으로 확인하는 시스템`,
                `기숙사 관리 시스템(WEB)`,
                `근태관리 시스템(휴가, 조퇴 등 신청/승인/반려)`
              ]}
            />
            <Resumecontent
              company="열린기술"
              career="2014-07-01 ~ 2019-01-01"
              content={[
                `출입관리 시스템(S-OIL 울산)`,
                `출입 관리 시스템 개발 및 유지보수`,
                `사/도급 관리 시스템(S-OIL 울산)`,
                `물품 반입/반출 시스템 개발 및 유지보수`,
                `점검 데이터 관리 시스템(S-OIL 울산)`,
                `바코드 리더기를 통하여 점검 할 수 있도록 구현된 시스템`,
                `넥센타이어 MES 시스템(체코 프라하)`,
                `넥센 타이어 체코 공장 확장으로 MES 시스템 구축`
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;이력서 다운로드
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
