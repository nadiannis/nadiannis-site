import { useEffect } from 'react';
import Script from 'next/script';
import NProgress from 'nprogress';
import getInitialThemeScript from '../helpers/theme';

import '../styles/globals.css';
import '../styles/nprogress.css';
import { ThemeContextProvider } from '../store/themeContext';

const progress = NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const handleStart = () => progress.start();
    const handleStop = () => progress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: getInitialThemeScript(),
        }}
      />
      <ThemeContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
