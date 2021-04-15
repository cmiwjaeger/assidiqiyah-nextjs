import Head from "next/head";
import cl from "classnames";

import Layout from "../components/layouts";
import { Col, Container, Row } from "reactstrap";
import CardNews from "../components/CardNews";
import CardProgramStudy from "../components/CardProgramStudy";
import Gallery from "../components/Gallery";

import styles from "../styles/Home.module.scss";

// UTILS
import { getPublicUrl, splitBoldTitle } from "../lib/utils";

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
          title
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
                src={getPublicUrl(data?.homePage.content[0].images[0], "small")}
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
        {data?.homePage.content[1].program_studies.length > 0 && (
          <Row md={4}>
            {data?.homePage.content[1].program_studies.map((item, index) => (
              <Col key={item.id}>
                <CardProgramStudy
                  title={item.title}
                  cardClassName="wow fadeInUp"
                  cardDelayAnimation="100ms"
                  image={getPublicUrl(item.image, "small")}
                />
              </Col>
            ))}
          </Row>
        )}
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
        {data?.homePage.content[2].images.length > 0 && (
          <Gallery data={data?.homePage.content[2].images} />
        )}
        {/* 
        <div className="abt-img">
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
                  <img src={getPublicUrl(item)} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      */}
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
