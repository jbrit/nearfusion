import "../styles/globals.css";
import "../styles/home.css";
import "../styles/courses.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import "public/fonts/GTWalsheimPro/stylesheet.css";
import "public/fonts/PPMonumentExtended/stylesheet.css";
import "public/fonts/Joystix/stylesheet.css";


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
