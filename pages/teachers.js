import Head from "next/head";
import styles from "../styles/Teachers.module.scss";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import CardTeacher from "../components/CardTeacher";
import CardProgramStudy from "../components/CardProgramStudy";

import Jumbotron from "../components/Jumbotron";

export default function Teachers() {
  return (
    <Layout>
      <Jumbotron title="TEACHER" />
      <Container>
        <Row md={4}>
          <Col>
            <CardProgramStudy
              title="TK Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="100ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="300ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              image=""
              cardClassName="wow fadeInUp"
              cardDelayAnimation="500ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="700ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
        </Row>

        <Row md={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Col index={index}>
              <CardTeacher />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
