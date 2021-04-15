import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import cl from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/Footer.module.scss";

// UTILS
import { getPublicUrl, splitBoldTitle } from "../../lib/utils";

import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    header {
      content {
        ... on ComponentSectionsType6 {
          id
          title
          desc
          image {
            ... on UploadFile {
              name
              formats
              url
            }
          }
        }
      }
    }
  }
`;

export default function Footer() {
  const { data } = useQuery(QUERY);

  return (
    <div style={{ backgroundColor: "#D1D1D1" }}>
      <Container>
        <Row className={styles.row} style={{ alignItems: "center" }}>
          <Col md={3}>
            <div className={styles.logo_wrapper}>
              <img width={59} height={59} src="images/assidiqiyah-logo.png" />
              <div>
                <div
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    lineHeight: 0.9,
                  }}
                >
                  YAYASAN PENDIDIKAN ISLAM <br /> ASSIDIQIYAH
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            {data?.header?.content?.map((item) => (
              <div className={styles.row} key={item.key}>
                <div className="my-icon mr-2">
                  <img
                    width="14"
                    height="14"
                    src={getPublicUrl(item.image[0])}
                    className="contact-info-svg"
                  />
                </div>
                <div className={styles.column}>
                  <div className={styles.header}>{item.title}</div>
                  <div className={styles.subHeader}>{item.desc}</div>
                </div>
              </div>
            ))}
          </Col>
          <Col>Google Maps</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>
            <span style={{ color: "#575757" }}>
              © Copyrights 2021 WLDGR x CMIW
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
