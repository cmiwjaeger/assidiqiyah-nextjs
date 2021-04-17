import Head from "next/head";
import styles from "../styles/News.module.scss";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import CardNews from "../components/CardNews";

import Jumbotron from "../components/Jumbotron";

// GRAPHQL
import { gql, useQuery } from "@apollo/client";

// UTILS
import { getPublicUrl, splitBoldTitle } from "../lib/utils";

const QUERY = gql`
  query {
    posts {
      id
      title
      content
      created_at
      slug
      image {
        ... on UploadFile {
          name
          formats
          url
        }
      }
    }
  }
`;

export default function News() {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Layout>
      <Jumbotron title="NEWS" />
      <Container>
        <Row md={3}>
          {data?.posts.map((item, index) => (
            <Col key={index}>
              <CardNews
                title={item.title}
                subtitle={item.subtitle}
                content={`${item.content.substring(0, 80)} ...`}
                image={getPublicUrl(item.image[0], "small")}
                slug={item.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>{" "}
    </Layout>
  );
}
