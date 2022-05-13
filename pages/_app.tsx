import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import Global from "../components/Global";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Global />
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
