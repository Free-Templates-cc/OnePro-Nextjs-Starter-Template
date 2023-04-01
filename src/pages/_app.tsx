import "@/styles/onepro.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
