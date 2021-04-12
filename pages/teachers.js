import { useState } from "react";
import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import CardTeacher from "../components/CardTeacher";
import CardProgramStudy from "../components/CardProgramStudy";

import Jumbotron from "../components/Jumbotron";

// GRAPHQL
import { gql, useQuery } from "@apollo/client";

// UTILS
import { getPublicUrl, splitBoldTitle } from "../lib/utils";

const QUERY = gql`
  query {
    schools {
      id
      name
      created_at
      image {
        ... on UploadFile {
          name
          formats
          url
        }
      }
      teachers {
        ... on Teachers {
          id
          name
          image {
            ... on UploadFile {
              name
              formats
              url
            }
          }
        }
      }
    }
  }
`;

export default function Teachers() {
  const { loading, error, data } = useQuery(QUERY);

  const [selectedSchoolIndex, setSelectedSchoolIndex] = useState(0);

  const handleSelectSchool = () => (idx) => {
    setSelectedSchoolIndex(idx);
  };

  return (
    <Layout>
      <Jumbotron title="TEACHER" />
      <Container>
        <Row md={4}>
          {data?.schools.map((item, index) => {
            const cardClassName =
              index === selectedSchoolIndex
                ? "wow fadeInUp school-box active"
                : "wow fadeInUp school-box";

            const cardDelayAnimation = `${index * 100 + 100}ms`;
            return (
              <>
                <Col onClick={handleSelectSchool(index)}>
                  <CardProgramStudy
                    title={item.name}
                    cardClassName={cardClassName}
                    cardDelayAnimation={cardDelayAnimation}
                    image={getPublicUrl(item.image)}
                  />
                </Col>
              </>
            );
          })}
        </Row>

        <Row md={4}>
          {data?.schools[selectedSchoolIndex].teachers.map((item, index) => (
            <Col index={index}>
              <CardTeacher
                title={item.name}
                subTitle={item.since}
                image={getPublicUrl(item.image)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
