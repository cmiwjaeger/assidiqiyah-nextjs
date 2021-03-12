import React, { useEffect, useState } from "react";
import Link from "next/link";

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

import styles from "../../styles/Header.module.scss";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content d-flex flex-wrap align-items-center">
            <div className={cl([styles.ribbon_item, styles.logo])}>
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

            <ul className="contact-add d-flex flex-wrap">
              <li>
                <div className="contact-info">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-info-svg"
                  />

                  <div className="contact-tt">
                    <h4>Call</h4>
                    <span>+2 342 5446 67</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-info">
                  <img src="assets/img/icon2.png" alt="" />
                  <div className="contact-tt">
                    <h4>Work Time</h4>
                    <span>Mon - Fri 8 AM - 5 PM</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-info">
                  <img src="assets/img/icon3.png" alt="" />
                  <div className="contact-tt">
                    <h4>Address</h4>
                    <span>Franklin St, Greenpoint Ave</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="menu-btn">
              <a href="#">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </a>
            </div>
          </div>

          <div className="navigation-bar d-flex flex-wrap align-items-center">
            <nav>
              <ul>
                <li>
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="active">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="active">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="active">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/" className="active">
                    School Achivements
                  </Link>
                </li>
                <li>
                  <Link href="/" className="active">
                    Teacher
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="responsive-menu">
        <ul>
          <li>
            <a href="index.html" title="">
              Home
            </a>
          </li>
          <li>
            <a href="about.html" title="">
              About
            </a>
          </li>
          <li>
            <a href="events.html" title="">
              Events
            </a>
          </li>
          <li>
            <a href="event-single.html" title="">
              Event Single
            </a>
          </li>
          <li>
            <a href="schedule.html" title="">
              Schedule
            </a>
          </li>
          <li>
            <a href="classes.html" title="">
              Classes
            </a>
          </li>
          <li>
            <a href="class-single.html" title="">
              Classe Single
            </a>
          </li>
          <li>
            <a href="teachers.html" title="">
              Teachers
            </a>
          </li>
          <li>
            <a href="teacher-single.html" title="">
              Teacher Single
            </a>
          </li>
          <li>
            <a href="blog.html" title="">
              Blog
            </a>
          </li>
          <li>
            <a href="post.html" title="">
              Blog Single
            </a>
          </li>
          <li>
            <a href="contacts.html" title="">
              Contacts
            </a>
          </li>
          <li>
            <a href="error.html" title="">
              404
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <Container fluid style={{ height: 137, padding: 0 }}>
      <Row className={styles.navbar_top}>
        <Col>
          <div className={cl([styles.ribbon_item, styles.logo])}>
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
        <Col md={2}>
          <div className={[styles.ribbon_item]}>
            <div className="my-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={styles.column}>
              <div className={styles.header}>Call</div>
              <div className={styles.subHeader}>+62 812371</div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={[styles.ribbon_item]}>
            <div className="my-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className={styles.column}>
              <div className={styles.header}>Work Time</div>
              <div className={styles.subHeader}>Mon - Fri 8 AM - 5 PM</div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={[styles.ribbon_item]}>
            <div className="my-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className={styles.column}>
              <div className={styles.header}>Address</div>
              <div className={styles.subHeader}>
                Jl. Hos. Cokroaminoto no.2 Ciledug, Tangerang 15151
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Navbar expand="md" className={styles.navbar}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/" passHref>
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/profile" passHref>
                <NavLink>Profile</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/news" passHref>
                <NavLink>News</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/achivements" passHref>
                <NavLink>School Achivements</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/facilities" passHref>
                <NavLink>Facilities</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/teachers" passHref>
                <NavLink>Teacher</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}
