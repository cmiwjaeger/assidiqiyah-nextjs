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

import styles from "./CardProgramStudy.module.scss";

export default function CardProgramStudy({
  title,
  cardClassName,
  cardDelayAnimation,
}) {
  return (
    <Card
      className={cl([styles.card, cardClassName])}
      data-wow-duration="1000ms"
      data-wow-delay={cardDelayAnimation}
    >
      <CardImg
        top
        width="100"
        height="100"
        src="https://via.placeholder.com/100x100.png"
        style={{ borderRadius: "50%" }}
        alt="Card image cap"
        className={styles.cardImage}
      />
      <CardBody className={styles.cardBody}>
        <CardTitle tag="h5" className={styles.title}>
          {title}
        </CardTitle>
      </CardBody>
    </Card>
  );
}
