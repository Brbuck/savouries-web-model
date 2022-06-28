import React from "react";
// import { Container } from './styles';

import Swiper from "../../components/Swiper";
import ForYou from "../../components/Menu";

import { Data } from "./DataServices";

function Home() {
  return (
    <div>
      <Swiper />
      <ForYou
        data={Data}
        title={"Conheça nossas maravilhas"}
        link={"Cardápio completo"}
      />
    </div>
  );
}

export default Home;
