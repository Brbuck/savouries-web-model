import React from "react";
// import { Container } from './styles';

import Swiper from "../../components/Swiper";
import ForYou from "../../components/Menu";
import CenterBranded from "../../Components/CenterBranded";


import { Data } from "./DataServices";

function Home() {
  return (
    <div>
      <Swiper />
      <ForYou
        data={Data}
        title={"Conheça nossas maravilhas"}
        link={"Clique aqui para baixar nosso cardápio de encomendas"}
      />
      <CenterBranded
        title={"Quer Fazer Uma Encomenda?"}
        subtitle={
          "É muito fácil, basta clicar no botão 'Converse com a gente' e escolher a forma mais ideal para você "
        }
        link={"Converse com a gente"}
      />
    </div>
  );
}

export default Home;
