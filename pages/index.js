import Head from "next/head";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import CardNews from "../components/CardNews";
import CardProgramStudy from "../components/CardProgramStudy";

import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

import MarkdownView from "react-showdown";

export default function Home(prop) {
  useEffect(() => {
    $(".masonary").isotope({
      masonry: {
        columnWidth: 0.5,
      },
    });
  }, []);

  const { data: props } = prop;
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
              {props.section[0].title.split(", ").map((item, index) => {
                if (index == 0) {
                  return <h1 className="font-weight-bold">{item}</h1>;
                } else {
                  return (
                    <h1 className="font-weight-bold my-primary">{item}</h1>
                  );
                }
              })}
              <h6>{props.section[0].subtitle}</h6>
            </div>
          </Col>
          <Col md={5}>
            <div className="elements-bg wow zoomIn" data-wow-duration="1000ms">
              <img
                height="200"
                width="200"
                src={`${process.env.REACT_APP_URL}${props.section[0].image[0]?.formats.small.url}`}
                alt=""
                className={styles.circular}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={9} className="text-center">
            <h1 className="my-primary">{props.section[1].title}</h1>
            <p>{props.section[1].desc}</p>
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <CardProgramStudy
              title="TK Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="100ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="300ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="500ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
          <Col>
            <CardProgramStudy
              title="SD Al - Hasanah"
              cardClassName="wow fadeInUp"
              cardDelayAnimation="700ms"
              image={"images/assidiqiyah-logo.png"}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h1 className="my-primary">
              {props.section[2].title}
              {/* <span className="font-weight-bold">Social Media</span> Update */}
            </h1>
          </Col>
        </Row>

        <div className="abt-img" style={{ width: "100%" }}>
          <ul className="masonary">
            {props.section[2].image.map((item, index) => (
              <li
                key={index}
                className={`width${index + 1} wow zoomIn`}
                data-wow-duration="1000ms"
              >
                <a
                  href={`${process.env.REACT_APP_URL}${item.url}`}
                  data-group="set1"
                  title=""
                  className="html5lightbox"
                >
                  <img
                    src={`${process.env.REACT_APP_URL}${item.formats.thumbnail.url}`}
                    alt=""
                  />
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

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.REACT_APP_URL}/home-page`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
