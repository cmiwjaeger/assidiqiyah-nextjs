import Head from "next/head";
import styles from "../styles/Profile.module.scss";
import cl from "classnames";

import Layout from "../components/layouts";
import { Card, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Jumbotron from "../components/Jumbotron";

export default function Profile() {
  return (
    <Layout>
      <Jumbotron title="PROFILE" />

      <Container className={styles.container}>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col>
            <h1 className="font-weight-bold my-primary">HISTORY</h1>
            <p style={{ textAlign: "justify" }}>
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
              Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum
              leo sagittis et. Morbi vel augue et metus pellentesque lacinia eu
              non odio. Sed id purus urna. Maecenas ultrices ligula a nisi
              dictum tristique. Suspendisse potenti. Curabitur egestas ultrices
              sem, eu vestibulum leo sagittis et. Morbi vel augue et metus
              pellentesque lacinia eu non odio. Sed id purus urna. Maecenas
              ultrices ligula a nisi dictum tristique. Suspendisse potenti.
              Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
              Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum
              leo sagittis et.
            </p>
          </Col>
          <Col>
            <div>
              <img
                src="https://via.placeholder.com/565x565.png"
                alt="Card image cap"
                className="circular"
              />
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col>
            <div>
              <img
                src="https://via.placeholder.com/565x565.png"
                alt="Card image cap"
                className="circular"
              />
            </div>
          </Col>
          <Col>
            <h1 className="my-primary">
              <span className="font-weight-bold">VISI </span>
              DAN MISI
            </h1>
            <p style={{ textAlign: "justify" }}>
              Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
              Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae
              elit ligula. Fusce eu rutrum nisl.
            </p>
            <ul className="fa-ul">
              <li>
                <FontAwesomeIcon
                  icon={faPenFancy}
                  className="fa-li my-primary"
                />
                Praesent rhoncus
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faPenFancy}
                  className="fa-li my-primary"
                />
                Fusce eu rutrum
              </li>
            </ul>
          </Col>
        </Row>

        <Row
          md={2}
          style={{ display: "flex", alignItems: "center", marginTop: 60 }}
        >
          <Col>
            <h1>
              <span className="font-weight-bold">AKREDITASI </span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
              Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae
              elit ligula. Fusce eu rutrum nisl.
            </p>
          </Col>
          <Col>
            <div style={{ display: "flex" }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
