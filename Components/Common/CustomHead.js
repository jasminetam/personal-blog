import Head from 'next/head';

const CustomHead = ({ children }) => {
  return (
    <Head data-test="component-CustomHead">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="image/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="image/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="image/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#363636" />
      {children}
    </Head>
  );
};

export default CustomHead;
