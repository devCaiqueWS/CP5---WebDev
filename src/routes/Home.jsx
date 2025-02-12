import { useState, useEffect } from "react";
// import '../style/Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../routes/estilo.module.css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home() {
  const [slidePerView, setSlidePerView] = useState(2);

  const imagens = [
    { id: "1", image: img1 },
    { id: "2", image: img2 },
    { id: "3", image: img3 },
  ];
  //criando o hook useEfect - efeito colateral

  useEffect(() => {
    //criar a função de responsividade no slideshow
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(2);
      } else {
        setSlidePerView(1);
      }
    }
    //chamando a função
    handleResize();
    //evento vai modificar toda que diminuir a página
    window.addEventListener("resize", handleResize);

    //como estamos usando o useEffect é bom sair do evento e
    //desmontarmos para não perder performace
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    //retornando um array vazio
  }, []);

  return (
    <>
      <section>
        <Swiper
          slidePerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {imagens.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slide" className={styles.slideItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section class="content">
        <div class="content-item">
          <h1>Bem-vindo(a)</h1>
          <p>
            Seja você um amante de sushi, sashimi, ramen ou simplesmente curioso
            para explorar os sabores fascinantes da culinária japonesa, você
            chegou ao lugar certo! O Oishī é o seu portal para uma experiência
            gastronômica única, onde a tradição e a inovação se unem para criar
            pratos que encantam os paladares de todo o mundo.
          </p>
        </div>
        <div class="content-item">
          <h1>Nossa Missão</h1>
          <p>
            No Sabor Japonês, estamos empenhados em compartilhar a riqueza da
            comida japonesa com você. Nossa missão é trazer autenticidade e
            qualidade a cada prato que servimos. Cada pedaço de sushi enrolado
            com maestria, cada tigela de ramen cuidadosamente preparada e cada
            prato que sai de nossa cozinha é uma obra de arte culinária.
          </p>
        </div>
        <div class="content-item">
          <h1>Ambiente Acolhedor</h1>
          <p>
            Nossa atmosfera acolhedora e autêntica o convida a desfrutar da
            culinária japonesa em seu melhor. Nosso espaço é projetado para
            proporcionar uma experiência única que o transporta para as ruas
            movimentadas de Tóquio ou para o ambiente sereno de um tradicional
            ryokan. Aprecie a hospitalidade japonesa e a simpatia da nossa
            equipe, que está sempre pronta para tornar a sua visita memorável.
          </p>
        </div>
      </section>
    </>
  );
}
export default Home;
