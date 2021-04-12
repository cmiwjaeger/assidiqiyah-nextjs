import Layout from "../components/layouts";
import { Col, Container, Row } from "reactstrap";

import Jumbotron from "../components/Jumbotron";

// GRAPHQL
import { gql, useQuery } from "@apollo/client";

// UTILS
import { getPublicUrl } from "../lib/utils";
import CardAchievement from "../components/CardAchievement";

const QUERY = gql`
  query {
    achievements(limit: 6, sort: "created_at:desc") {
      id
      title
      subtitle
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

export default function Achivements() {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Layout>
      <Jumbotron title="ACHIVEMENTS" />
      <Container>
        <Row md={4}>
          {data?.achievements.map((item, index) => (
            <Col key={index}>
              <CardAchievement
                title={item.title}
                subtitle={item.subtitle}
                image={getPublicUrl(item.images[0])}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
