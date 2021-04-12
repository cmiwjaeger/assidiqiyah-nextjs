import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import cl from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/Footer.module.scss";

export default function Footer() {
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
            <div className={styles.row}>
              <div className="my-icon mr-2">
                <FontAwesomeIcon icon={faPhone} className="contact-info-svg" />
              </div>
              <div className={styles.column}>
                <div className={styles.header}>Call</div>
                <div className={styles.subHeader}>+62 812371</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className="my-icon mr-2">
                <FontAwesomeIcon icon={faClock} className="contact-info-svg" />
              </div>
              <div className={styles.column}>
                <div className={styles.header}>Work Time</div>
                <div className={styles.subHeader}>Mon - Fri 8 AM - 5 PM</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className="my-icon mr-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contact-info-svg"
                />
              </div>
              <div className={styles.column}>
                <div className={styles.header}>Address</div>
                <div className={styles.subHeader}>
                  Jl. Hos. Cokroaminoto no.2 Ciledug, Tangerang 15151
                </div>
              </div>
            </div>
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
