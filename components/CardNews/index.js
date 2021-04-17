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

import styles from "./CardNews.module.scss";
import Link from "next/link";

export default function CardNews({ title, subtitle, content, image, slug }) {
  return (
    <Card className={styles.card}>
      <CardImg
        top
        width="100%"
        src={image ? image : "https://dummyimage.com/600x400/000/fff"}
        alt="Card image cap"
        className={styles.cardImage}
      />
      <CardBody className={styles.cardBody}>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {subtitle}
        </CardSubtitle>
        <CardText>{content}</CardText>
        <Link href={`/news/[slug]`} as={`/news/${slug}`}>
          <Button color="link" className={styles.button}>
            Read
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              style={{ marginLeft: 10 }}
            />
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
