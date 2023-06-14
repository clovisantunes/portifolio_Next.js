import Head from "next/head";
import styles from "../../styles/home.module.scss";
import Navbar from "./Components/UI/Navbar/Index";
import Main from "../pages/Components/Main/Index";
import { Skills } from "./Components/Skils";
import CardProfile from "./Components/Card";
import Projects  from "./Components/Projects";


export default function Home() {
  return (
    <>
      <Head>
        <title>Clovis Antunes || Portifolio</title>
        <link rel="shortcut icon" href='/favicon.ico'/>
      </Head>
      <div className={styles.containerCenter}>
        <div>
          <Navbar />
        </div>
        <div id="main">
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
      </div>
    </>
  );
}
