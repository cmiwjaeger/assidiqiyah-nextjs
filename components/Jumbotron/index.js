import React, { useEffect, useState } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";
import cl from "classnames";

import styles from "./Jumbotron.module.scss";

export default function Jumbotron({ title }) {
  return (
    <Container
      fluid
      style={{
        minHeight: 300,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      className={styles.container}
    >
      <Row>
        <Col>
          <h1 className="font-weight-bold text-center">{title}</h1>
        </Col>
      </Row>
    </Container>
  );
}
