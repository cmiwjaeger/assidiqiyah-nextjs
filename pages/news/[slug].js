import Head from "next/head";

import Layout from "../../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";

import Jumbotron from "../../components/Jumbotron";
import moment from "moment";
import { getPublicUrl } from "../../lib/utils";

import { initializeApollo } from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";

export default function NewsDetail(props) {
  const { post: news } = props;

  return (
    <Layout withBg>
      <Container>
        <Row md={1}>
          <Col>
            <h2>{news.title}</h2>
            <span>{`${moment(news.published_at).format(
              "DD/mm/yyyy HH:mm"
            )} WIB`}</span>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <img
              src={getPublicUrl(news.image[0], "medium")}
              style={{ maxWidth: "100%", height: "auto", marginBottom: 40 }}
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <p style={{ whiteSpace: "pre-wrap" }}>{news.content}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const result = await fetch("https://api.alhasanah.id/posts");
  const res = await result.json();
  let paths = [];
  res.map((item) => {
    paths.push({
      params: { slug: item.slug },
    });
  });
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const client = initializeApollo();
  const res = await client.query({
    query: gql`
      query($slug: String!) {
        posts(where: { slug: $slug }) {
          id
          title
          content
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
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: { post: res.data.posts[0] }, // will be passed to the page component as props
  };
}
