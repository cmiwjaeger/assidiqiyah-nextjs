import React, { useEffect, useState } from "react";
import {
  faPhone,
  faMapMarkerAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import styles from "./CardTeacher.module.scss";

export default function CardTeacher({
  title = "Nama Pengajar",
  subTitle = "matapelajaran",
}) {
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
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {subTitle}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
