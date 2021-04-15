import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, withBg }) {
  return (
    <div>
      <Head>
        <title>Alhasanah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {withBg ? (
        <div className="main-section">
          <Header />
          <Container>{children}</Container>
        </div>
      ) : (
        <>
          <Header />
          <Container>{children}</Container>
        </>
      )}
      <Footer />
    </div>
  );
}
