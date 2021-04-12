import Head from "next/head";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import CardNews from "../components/CardNews";
import CardProgramStudy from "../components/CardProgramStudy";

import styles from "../styles/Home.module.scss";
import { useEffect, useLayoutEffect } from "react";

import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    posts(limit: 6, sort: "created_at:desc") {
      id
      title
      content
      created_at
      image {
        ... on UploadFile {
          name
          formats
          url
        }
      }
    }
    homePage {
      id
      content {
        ... on ComponentSectionsSection {
          title
          images {
            ... on UploadFile {
              name
              formats
              url
            }
          }
          action
        }
        ... on ComponentSectionsHeaderImage {
          id
          images {
            ... on UploadFile {
              name
              formats
            }
          }
        }
        ... on ComponentSectionsHeaderFull {
          __typename
        }
        ... on ComponentSectionsType4 {
          title
          desc
          program_studies(sort: "id:desc") {
            ... on ProgramStudy {
              image {
                ... on UploadFile {
                  url
                  name
                  formats
                }
              }
              id
              title
            }
          }
        }
      }
    }
  }
`;

export default function Home(props) {
  const { loading, error, data } = useQuery(QUERY);

  useLayoutEffect(() => {
    setTimeout(() => {
      $(".masonary").isotope({
        masonry: {
          columnWidth: 0.5,
        },
      });
    }, 500);
  }, []);
  if (loading) return null;

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
              {data?.homePage.content[0].title
                .split(", ")
                .map((item, index) => {
                  if (index == 0) {
                    return (
                      <h1 key={index} className="font-weight-bold">
                        {item}
                      </h1>
                    );
                  } else {
                    return (
                      <h1 key={index} className="font-weight-bold my-primary">
                        {item}
                      </h1>
                    );
                  }
                })}
              <h6>{data?.homePage.content[0].subtitle}</h6>
            </div>
          </Col>
          <Col md={5}>
            <div className="elements-bg wow zoomIn" data-wow-duration="1000ms">
              <img
                height="200"
                width="200"
                src={`${process.env.REACT_APP_URL}${data?.homePage.content[0].images[0]?.formats.small.url}`}
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
            <h1 className="my-primary">{data?.homePage.content[1].title}</h1>
            <p>{data?.homePage.content[1].desc}</p>
          </Col>
        </Row>
        <Row md={4}>
          {data?.homePage.content[1].program_studies.map((item, index) => (
            <Col key={item.id}>
              <CardProgramStudy
                title={item.title}
                cardClassName="wow fadeInUp"
                cardDelayAnimation="100ms"
                image={`${process.env.REACT_APP_URL}${item.image.url}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{ height: 50 }} />
      <Container>
        <Row>
          <Col>
            <h1 className="my-primary">
              {data?.homePage.content[2].title}
              {/* <span className="font-weight-bold">Social Media</span> Update */}
            </h1>
          </Col>
        </Row>

        <div className="abt-img" style={{ width: "100%" }}>
          <ul className="masonary">
            {data?.homePage.content[2].images.map((item, index) => (
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
      {data?.posts.length > 0 && (
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col md={9} className="text-center">
              <h1 className="my-primary">
                <span className="font-weight-bold">Recent</span> News
              </h1>
            </Col>
          </Row>
          <Row md={3}>
            {data.posts.map((item, index) => (
              <Col key={index}>
                <CardNews
                  title={item.title}
                  subtitle={item.subtitle}
                  content={`${item.content.substring(0, 80)} ...`}
                  image={`${process.env.REACT_APP_URL}${item.image[0].formats.thumbnail.url}`}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Layout>
  );
}
