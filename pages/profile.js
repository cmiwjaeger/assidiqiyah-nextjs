import { useEffect } from "react";
import Head from "next/head";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";

import Jumbotron from "../components/Jumbotron";
import styles from "../styles/Profile.module.scss";

// GRAPHQL
import { gql, useQuery } from "@apollo/client";

// UTILS
import { getPublicUrl, splitBoldTitle } from "../lib/utils";

const QUERY = gql`
  # Write your query or mutation here
  query {
    profilePage {
      id
      content {
        ... on ComponentSectionsType5 {
          title
        }
        ... on ComponentSectionsType6 {
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
        ... on ComponentSectionsType7 {
          title
          desc
          image {
            ... on UploadFile {
              name
              formats
              url
            }
          }
          list {
            ... on ComponentListListWithIcon {
              label
            }
          }
        }
        ... on ComponentSectionsType8 {
          title
          desc
          accreditation {
            ... on ComponentCardAccreditationContent {
              title
              desc
              image {
                ... on UploadFile {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default function Profile() {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Layout>
      <Jumbotron title="PROFILE" />

      <Container className={styles.container}>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col
            xs={12}
            md={6}
            className="wow fadeInLeft"
            data-wow-duration="1000ms"
          >
            <h1 className="font-weight-bold my-primary">
              {data?.profilePage.content[1].title}
            </h1>
            <p style={{ textAlign: "justify" }}>
              {data?.profilePage.content[1].desc}
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="wow fadeInRight"
            data-wow-duration="1000ms"
          >
            <div>
              <img
                src={getPublicUrl(data?.profilePage.content[1].image[0])}
                alt="Card image cap"
                className="circular"
              />
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col
            xs={12}
            md={6}
            className="wow fadeInLeft"
            data-wow-duration="1000ms"
          >
            <div>
              <img
                src={getPublicUrl(data?.profilePage.content[2].image[0])}
                alt="Card image cap"
                className="circular"
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="wow fadeInRight"
            data-wow-duration="1000ms"
          >
            <h1 className="my-primary">
              {splitBoldTitle(data?.profilePage.content[2].title)}
            </h1>
            <p style={{ textAlign: "justify" }}>
              {data?.profilePage.content[2].desc}
            </p>
            {data?.profilePage.content[2].list.length > 0 && (
              <ul className="fa-ul">
                {data?.profilePage.content[2].list.map((item, index) => (
                  <li key={`${index}-list`}>
                    <FontAwesomeIcon
                      icon={faPenFancy}
                      className="fa-li my-primary"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </Col>
        </Row>

        <Row
          md={2}
          style={{ display: "flex", alignItems: "center", marginTop: 60 }}
        >
          <Col>
            <h1>
              <span className="font-weight-bold">
                {data?.profilePage.content[3].title}
              </span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              {data?.profilePage.content[3].desc}
            </p>
          </Col>
          <Col>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {data?.profilePage.content[3].accreditation.length > 0 &&
                data?.profilePage.content[3].accreditation.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={cl([styles.cardWrapper, `wow zoomIn`])}
                      data-wow-duration="1000ms"
                      data-wow-delay={`${index * 500}ms`}
                    >
                      <Card
                        className={styles.card}
                        style={{
                          marginTop: index % 2 !== 0 ? 20 : 0,
                        }}
                      >
                        <CardBody>
                          <div>
                            <img
                              height="40"
                              width="40"
                              src={getPublicUrl(item.image)}
                            />
                          </div>
                          <div
                            style={{
                              color: "#2B2B2B",
                              fontWeight: "500",
                              fontSize: 18,
                              margin: "10px 0 10px 0",
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            style={{
                              color: "#575757",
                            }}
                          >
                            {item.desc}
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  )
                )}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
