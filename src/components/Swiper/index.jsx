import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  FreeMode,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.css";
import "swiper/css/thumbs";

import Savouries1 from "../../assets/location.jpg";
import Savouries2 from "../../assets/savouries.jpg";
import Savouries3 from "../../assets/delivery.jpg";

SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, Pagination]);

function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={12}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        /*  pagination={{
          clickable: true,
        }} */
        className="mySwiper2"
        id="banner"
      >
        <SwiperSlide>
          <img src={Savouries1} alt="Fachada de um comércio" />
          <div className="container-swipper">
            <h2 className="title">Datas Comemorativas</h2>
            <p className="sub-title">Há mais de 20 anos festeando com você.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Savouries2} alt="Prato com vários salgados de feestas" />
          <div className="container-swipper">
            <h2 className="title">Maravilhas</h2>
            <p className="sub-title">
              Salgados fresquinhos, sequinhos e crocantes
            </p>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5511999360000"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              PEDIR PELO WHATSAAP
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Savouries3} alt="Um motoboy" />
          <div className="container-swipper">
            <h2 className="title">Peça Pelo Ifood</h2>
            <p className="sub-title">
              Você também pode saborear as maravilhas da Salgados Maravilha onde
              você estiver
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ifood.com.br/delivery/campinas-sp/habibs---campinas-iii-jardim-pauliceia/17c7fb7e-bff8-4268-865c-33ad73d4e6cf"
              className="link-ifood"
            >
              FAZER PEDIDO
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
