import Head from "next/head";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import CardNews from "../components/CardNews";
import CardProgramStudy from "../components/CardProgramStudy";

import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    $(".masonary").isotope({
      masonry: {
        columnWidth: 0.5,
      },
    });
  }, []);
  return (
    <Layout withBg>
      <Container
        fluid
        style={{ minHeight: "80vh" }}
        className={cl([styles.container, "main-banner"])}
      >
        <div style={{ height: 149 }}></div>
        <Row>
          <Col md={7}>
            <div className="wow fadeInLeft" data-wow-duration="1000ms">
              <h1 className="font-weight-bold">YAYASAN PENDIDIKAN</h1>
              <h1 className="font-weight-bold my-primary">ISLAM ASSIDIQIYAH</h1>

              <h6>
                KINDERGARDEN - ELEMENTARY SCHOOL - JUNIOR HIGH SCHOOL - SENIOR
                HIGH SCHOOL
              </h6>
            </div>
          </Col>
          <Col md={5}>
            <div className="banner-img wow zoomIn" data-wow-duration="1000ms">
              {/* <img src="https://via.placeholder.com/497x586" alt="" /> */}
            </div>
            <div
              className="elements-bg wow zoomIn"
              data-wow-duration="1000ms"
            ></div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={9} className="text-center">
            <h1 className="my-primary">
              <span className="font-weight-bold">Program</span> Study
            </h1>
            <p>
              Sekolah An-Nisaa’ ingin Menjadikan seorang siswa/i Pemimpin Bangsa
              yang beriman, bertaqwa dan bernurani. Karakter kepemimpinan
              tersebut mengacu kepada nilai inti Sekolah An Nisaa’ yaitu 10 adab
              Annisaa yang terdiri dari Sabar, Syukur, Peduli, Jujur, Amanah,
              Disiplin, Kebersamaan, Rendah Hati, Damai dan Ikhlas
            </p>
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <CardProgramStudy
              title="TK Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="100ms"
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="300ms"
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="500ms"
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="700ms"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h1 className="my-primary">
              <span className="font-weight-bold">Social Media</span> Update
            </h1>
          </Col>
        </Row>

        <div className="abt-img" style={{ width: "100%" }}>
          <ul className="masonary">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <li
                key={index}
                className={`width${item} wow zoomIn`}
                data-wow-duration="1000ms"
              >
                <a
                  href="https://via.placeholder.com/1414x943"
                  data-group="set1"
                  title=""
                  className="html5lightbox"
                >
                  <img src="https://via.placeholder.com/1414x943" alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={9} className="text-center">
            <h1 className="my-primary">
              <span className="font-weight-bold">Recent</span> News
            </h1>
          </Col>
        </Row>
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
      </Container>
    </Layout>
  );
}
