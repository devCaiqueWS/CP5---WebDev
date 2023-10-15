import React from 'react';
import '../style/Sobre.css';

import caiqueImage from '../assets/caique.jpeg';
import enriccoImage from '../assets/enricco.jpeg';
import gabrielImage from '../assets/gabriel.jpeg';
import guilhermeImage from '../assets/guilherme.jpeg';
import silviaImage from '../assets/silvia.jpeg';

function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <section className="content">
        <div className="content-item">
          <img src={caiqueImage} alt="Caique Walter" />
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
          <img src={enriccoImage} alt="Enricco Rossi" />
        </div>
      </section>
      <section className="content">
        <div className="content-item">
          <img src={gabrielImage} alt="Gabriel Marquez" />
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
          <img src={guilhermeImage} alt="Guilherme Nobre" />
        </div>
      </section>
      <section className="content">
        <div className="content-item">
          <img src={silviaImage} alt="Silvia Kavabata" />
        </div>
        <div className="content-item">
          <div className="content-text">
            <h1>Silvia Kavabata</h1>
            <p>28 anos | Diretora de Arte e UX/UI Designer | Estudante de Engenharia de Software</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
