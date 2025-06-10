import "@/styles/globals.css";

import { TrackingProvider } from "@/Context/TrackingContext";
import { Footer, Navbar } from "@/Components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <Navbar />
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer />
    </>
  );
}
