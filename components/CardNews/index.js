import React, { useEffect, useState } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import cl from "classnames";

import styles from "./CardNews.module.scss";

export default function CardNews() {
  return (
    <Card className={styles.card}>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/370x270.png"
        alt="Card image cap"
        className={styles.cardImage}
      />
      <CardBody className={styles.cardBody}>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button color="link">Read</Button>
      </CardBody>
    </Card>
  );
}
