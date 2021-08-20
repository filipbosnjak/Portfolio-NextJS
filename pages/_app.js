//Trough here we import global styles

import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const NextApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default NextApp;
