import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import { store } from "@/redux/store";
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

      <ReduxProvider store={store}>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          transition={Bounce}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ReduxProvider>
    </>
  );
}
