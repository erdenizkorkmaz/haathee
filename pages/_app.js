import React from "react";

import "./_main.css";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
