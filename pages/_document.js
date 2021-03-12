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
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="assets/js/bundle.min.js"></script>
        </body>
      </Html>
    );
  }
}
