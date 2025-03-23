import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "@/styles/index.css";

const MAIN_FONT = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${MAIN_FONT.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
