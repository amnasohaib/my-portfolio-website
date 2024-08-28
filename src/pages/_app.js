import { NextUIProvider } from "@nextui-org/react";

import '../app/globals.css';

export const metadata = {
    title: "Portfolio",
    description: "My Personal Portfolio",
  };

export default function App({ Component, pageProps }) {
  return (
    // <NextUIProvider>
      <Component {...pageProps} />
    //   </NextUIProvider>
  );
}
