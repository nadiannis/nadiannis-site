import '../styles/globals.css';
import { ThemeContextProvider } from '../store/themeContext';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContextProvider>
  );
}

export default MyApp;
