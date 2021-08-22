//Trough here we import global styles

import "../styles/globals.css";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const NextApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        data-ad-client='ca-pub-6448765112690920'
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      />
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-5VF92BKRP1`}
      />
      <Script strategy='lazyOnload'>
        {`
        window.process = {
          env: {
            NODE_ENV:'development'
          }
        }
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5VF92BKRP1');
  `}
      </Script>
      <Component {...pageProps} />{" "}
    </>
  );
};

export default NextApp;
