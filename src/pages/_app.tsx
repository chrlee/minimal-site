import "@/styles/globals.css";
import "normalize.css";
import type { AppProps } from "next/app";
import { neueHaasGrotesk } from "../fonts/NeueHaasGrotesk";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${neueHaasGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
