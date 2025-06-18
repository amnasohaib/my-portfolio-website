import CustomCursor from "@/components/CustomCursor";
import "../app/globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My Personal Portfolio",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
