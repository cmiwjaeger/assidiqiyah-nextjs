import { useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "../styles/fontawesome/fontawesome.scss";

import "../styles/index.scss";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
