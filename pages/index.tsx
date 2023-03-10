import { FC } from "react";
import Head from "next/head";
import Offer from "../components/offer/Offer";
import Audiense from "../components/audiens/Audiense";
import Skills from "../components/skills/Skills";
import Question from "../components/questions/Questions";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>
          ҚҰМ ТРАНССАУДА - Товарищество с ограниченной ответственностью ҚҰМ
          ТРАНССАУДА выражает Вам свое почтение и заранее благодарит за
          внимание, оказанное к нашей компании.
        </title>
        <meta name="description" content="песок строительный" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Offer />
        <Audiense />
        <Skills />
        <Question />
      </main>
    </>
  );
};

export default Home;
