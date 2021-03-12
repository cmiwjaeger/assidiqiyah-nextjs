import Head from "next/head";
import styles from "../styles/News.module.scss";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import CardNews from "../components/CardNews";

import Jumbotron from "../components/Jumbotron";

export default function News() {
  return (
    <Layout>
      <Jumbotron title="NEWS" />
      <Container>
        <Row md={3}>
          <Col>
            <CardNews />
          </Col>
          <Col>
            <CardNews />
          </Col>
          <Col>
            <CardNews />
          </Col>
          <Col>
            <CardNews />
          </Col>
          <Col>
            <CardNews />
          </Col>
          <Col>
            <CardNews />
          </Col>
        </Row>
      </Container>{" "}
    </Layout>
  );
}
