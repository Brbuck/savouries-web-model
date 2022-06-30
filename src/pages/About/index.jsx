import React from "react";
import "./styles.scss";

import Banner from '../../components/Banner'

function About() {
  return (
    <div className="wrapper-about">
      <Banner title={"Nossa História"} />
      <div className="container-about">
        <div className="section-about-container">
          <div>
            <h3>Sobre Nós</h3>
            <p>
              Desde 1994 a Salgados Maravilha se dedica às maravilhas da
              gastronomia, sendo reconhecida pelo seu alto padrão e
              originalidade. Em 2010 ficou entre as 10 melhores Salgados de
              Campinas, sendo homenageada em cerimônia promovida pelo Sindicato
              da Panificação de Campinas. E em 2018 se tornou uma empresa
              familiar com o desejo de fornecer salgados de qualidade com um
              preço acessível a todos!
            </p>
            <h3>NOSSA MISSÃO</h3>
            <p>
              Atualmente tem como missão atender empresas, festas em geral e até
              clientes que desejam ter um petisco saboroso no freezer de sua
              casa para consumir quando desejar! Prezando sempre a qualidade e a
              valorização de seus clientes.
            </p>
          </div>
          <div>
            <h3>ATENDIMENTO AO CLIENTE</h3>
            <p>
              Hoje a Salgados Maravilha é considerada um dos lugares mais
              agradáveis da cidade, e é difícil eleger um rótulo que a defina,
              tudo isso utilizando produtos de ótima qualidade e atendimento
              personalizado.
            </p>
          </div>
        </div>
        <section className="section-about">
          <h1>Salgados Maravilha na Empresa</h1>
          <p>
            Muitos de nós passam os dias no trabalho e acabamos convivendo anos
            nesse grupo de colegas de empresa. Assim, comemorar metas
            alcançadas, aniversários de empresa e mesmo aniversariantes do mês
            traz mais leveza e alegria para o dia a dia, conte conosco para
            isso!
          </p>
          <p>Salgados Maravilha</p>
        </section>
      </div>
    </div>
  );
}

export default About;
