import Head from "next/head";
import { useTranslation } from "next-i18next"; 
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/home.module.scss";
import Navbar from "../Components/Navbar/Index";
import Main from "../Components/Main/Index";
import { Skills } from "../Components/Skils";
import CardProfile from "../Components/Card";
import Projects  from "../Components/Projects";
import Footer from "../Components/UI/Footer";
import Contact from "../Components/Contact";
import Tech from "../Components/Tech";


export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Clovis Antunes || Portifolio</title>
        <link rel="shortcut icon" href='/favicon.ico'/>
      </Head>
      <div>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
        <div id="main" className={styles.mainContainer}>
          <Main />
        </div>
        <div id="cardProfile">
          <CardProfile />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="Contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}