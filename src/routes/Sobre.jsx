import {} from 'react';
import '../style/Sobre.css';


function Sobre (){
  return(
    <>
    <h1>Sobre</h1>
        <section className="content">
          <div className="content-item">
            <img src="./src/assets/caique.jpeg" alt=""/>
          </div>
          <div className="content-item">
            <div className="content-text">
              <h1>Caíque Walter</h1>
              <p>18 anos | Analista de Negócios em TI | Estudante de Engenharia de Software</p>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="content-item">
            <div className="content-text">

              <h1>Enricco Rossi</h1>
              <p>19 anos | Analista de Segurança da Informação | Estudante de Engenharia de Software</p>
            </div>
              </div>
          <div className="content-item">
            <img src="./src/assets/enricco.jpeg" alt=""/>
          </div>
        </section>
        <section className="content">
          <div className="content-item">
            <img src="imagem-int1" alt=""/>
          </div>
          <div className="content-item">
            <div className="content-text">
              <h1>Gabriel Marquez</h1>
              <p>19 anos | Estudante de Engenharia de Software e UX/UI Design</p>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="content-item">
            <div className="content-text">

              <h1>Guilherme Nobre</h1>
              <p>21 anos | Analista de BI XRM | Estudante de Engenharia de Software</p>
            </div>
              </div>
          <div className="content-item">
            <img src="imagem-int1" alt=""/>
          </div>
        </section>
        <section className="content">
          <div className="content-item">
            <img src="imagem-int1" alt=""/>
          </div>
          <div className="content-item">
            <div className="content-text">
              <h1>Silvia Kavabata</h1>
              <p>28 anos | Diretora de Arte e UX/UI Designer | Estudante de Engenharia de Software</p>
            </div>
          </div>
        </section>
    </>
  )
}
export default Sobre