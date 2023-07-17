import { appWithTranslation } from 'next-i18next';

import '../../styles/globals.scss';

function App({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default appWithTranslation(App);