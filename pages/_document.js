import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets/css/main.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
          />
        </Head>
        <body>
          <Main />

          <script src="assets/js/bundle.min.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
