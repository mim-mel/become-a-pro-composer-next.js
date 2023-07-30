import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { FontStyle } from '../styles/fonts/fonts';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <Script
        defer
        src='https://use.fontawesome.com/releases/v6.1.1/js/all.js'
        integrity='sha384-xBXmu0dk1bEoiwd71wOonQLyH+VpgR1XcDH3rtxrLww5ajNTuMvBdL5SOiFZnNdp'
        crossOrigin='anonymous'
      ></Script> */}
      <GlobalStyle />
      <FontStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
