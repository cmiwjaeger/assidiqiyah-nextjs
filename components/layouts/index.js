import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-section">
        <Header />
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
}
