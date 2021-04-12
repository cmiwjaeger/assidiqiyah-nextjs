import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import { gql, useQuery } from "@apollo/client";
import CardFacility from "../components/CardFacility";

const QUERY = gql`
  query {
    facilities(limit: 4, sort: "created_at:desc") {
      id
      title
      content
      created_at
      images {
        ... on UploadFile {
          name
          formats
          url
        }
      }
    }
  }
`;

export default function Facilities() {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Layout>
      <Jumbotron title="FACILITIES" />
      <Container>
        <Row md={2}>
          {data?.facilities.map((item, index) => (
            <Col key={index}>
              <CardFacility
                title={item.title}
                content={item.content}
                image={`${process.env.REACT_APP_URL}${item.images[0].formats.thumbnail.url}`}
              />
            </Col>
          ))}
        </Row>
      </Container>{" "}
    </Layout>
  );
}
