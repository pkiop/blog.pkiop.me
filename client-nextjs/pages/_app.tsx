import type { AppProps } from 'next/app';
import { wrapper } from '../state/createStore';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
