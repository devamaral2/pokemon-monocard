/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
