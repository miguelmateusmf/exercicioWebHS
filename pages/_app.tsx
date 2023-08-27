import React from "react";
import "../globals.css";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
