import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import cl from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.scss";

export default function Header(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const isActiveLink = (url) => {
    if (url == "/") {
      return router.pathname == "/" ? "active" : "";
    } else {
      return router.pathname.includes(url) ? "active" : "";
    }
  };

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
                  {/* <img src="assets/img/icon2.png" alt="" /> */}
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
                    <span>
                      Jl. Hos. Cokroaminoto no.2 Ciledug, Tangerang 15151
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            <div
              className={cl([
                "menu-btn",
                {
                  active: isOpen,
                },
              ])}
              onClick={toggle}
            >
              <a>
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
                  <Link href="/">
                    <a className={isActiveLink("/")}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <a className={isActiveLink("profile")}>Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className={isActiveLink("news")}>News</a>
                  </Link>
                </li>
                <li>
                  <Link href="/facilities">
                    <a className={isActiveLink("facilities")}>Facilities</a>
                  </Link>
                </li>
                <li>
                  <Link href="/achivements" className="active">
                    <a className={isActiveLink("achivements")}>
                      School Achivements
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/teachers" className="active">
                    <a className={isActiveLink("teachers")}>Teacher</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div
        className="responsive-menu"
        className={cl([
          "responsive-menu",
          {
            active: isOpen,
          },
        ])}
      >
        <ul>
          <li>
            <Link href="/">
              <a className={isActiveLink("/")}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className={isActiveLink("profile")}>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a className={isActiveLink("news")}>News</a>
            </Link>
          </li>
          <li>
            <Link href="/facilities">
              <a className={isActiveLink("facilities")}>Facilities</a>
            </Link>
          </li>
          <li>
            <Link href="/achivements" className="active">
              <a className={isActiveLink("achivements")}>School Achivements</a>
            </Link>
          </li>
          <li>
            <Link href="/teachers" className="active">
              <a className={isActiveLink("teachers")}>Teacher</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
