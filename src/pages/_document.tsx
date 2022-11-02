import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="text-white">
        <Head>
          {/* meta tags for SEO */}
          <meta httpEquiv="Cache-control" content="max-age=3153600" />
          <meta name="title" content="SOLA-X" />
          <meta name="description" content="Smart liquidity cross-chain protocol powered by Solana." key="desc" />
          <meta name="keywords" content="sola-x, dex, swap, solana" />
          <meta property="og:url" content="https://solax.so/" />
          <meta property="og:type" content="DEX platform" />
          <meta property="og:site_name" content="SOLA-X" />

          <link rel="publisher" href="https://solax.so" />
          <meta name="robots" content="index,follow" />
          <meta name="GOOGLEBOT" content="index,follow" />

          {/* font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&display=optional"
          ></link>

          {/* icon */}
          <link rel="icon" href="/sola-x.ico" type="image/ico" />

          {/* google tagmanager and google analytics */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D43QGN298P" strategy="beforeInteractive" />
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments)}
              gtag("js", new Date());
              gtag("config", 'G-D43QGN298P');
            `,
            }}
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
