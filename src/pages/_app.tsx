import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <>
     <Head>
  <title>Clovis Antunes | Desenvolvedor Web | Portfólio</title>
  <meta
    name="description"
    content="Desenvolvedor Web com especialização em React.js, Next.js e TypeScript. Criação de sites modernos e responsivos para empresas e freelancers."
  />
  <meta
    name="keywords"
    content="desenvolvedor web, programação, React.js, Next.js, TypeScript, desenvolvimento de sites, portfólio de desenvolvedor, freelancer, criação de websites, aplicações web, desenvolvedor front-end, soluções digitais"
  />
  <meta name="author" content="Clovis Antunes" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta charSet="UTF-8" />
  <link rel="icon" href="/favicon.ico" />

  <meta property="og:title" content="Clovis Antunes | Desenvolvedor Web" />
  <meta
    property="og:description"
    content="Explore meu portfólio e veja projetos em React.js, Next.js e TypeScript. Desenvolvimento de sites modernos e responsivos."
  />
  <meta property="og:image" content="/images/portfolio-thumbnail.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.seusite.com" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Clovis Antunes | Desenvolvedor Web" />
  <meta
    name="twitter:description"
    content="Veja meu portfólio como desenvolvedor web especializado em React.js e Next.js."
  />
  <meta name="twitter:image" content="/images/portfolio-thumbnail.png" />
</Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
