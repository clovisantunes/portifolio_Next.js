import Head from "next/head";
import styles from "../../styles/home.module.scss";
import Navbar from "./Components/UI/Navbar/Index";
import Main from "../pages/Components/Main/Index";
import  Card  from "./Components/Card";
import { Skils } from "./Components/Skils";


export default function Home() {
  return (
    <>
      <Head>
        <title>Clovis Antunes || Portifolio</title>
        <link rel="shortcut icon" href='../../public/favicon.ico'/>
      </Head>
      <div className={styles.containerCenter}>
        <div>
          <Navbar />
        </div>
        <div>
          <Main  />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Skils />
        </div>
      </div>
    </>
  );
}
