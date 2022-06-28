import React from "react";
import './styles.scss';

import Swiper from "../../components/Swiper";
import ForYou from "../../components/Menu";
import CenterBranded from "../../Components/CenterBranded";

import { Data } from "./DataServices";

function Home() {
  return (
    <div className="home-container">
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
      <section className='widget'>
        <h1>Comemorar ficou mais importante do que nunca!</h1>
        <p>
          O mundo aprendeu a valorizar a vida, as pessoas e a importância de
          cada segundo. Nossa missão ficou mais séria ainda, ao ajudar você a
          celebrar a vida e desfrutar do que mais importa: o amor uns pelos
          outros. Não deixe passar em branco, comemore!
        </p>
        <p>Salgados Maravilha</p>
      </section>
    </div>
  );
}

export default Home;
