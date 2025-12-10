import s from './home.module.scss';
import Saude from '../../assets/saude.png';
import Medico from '../../assets/medico.png';

const Home = () => {
  return (
    <main className={s.main}>
      <section className={s.boxSaude}>
        <div className={s.conteudo}>
          <div>
            <img src={Saude} alt="logotipo Saúde para todos"></img>
          </div>

          <h1>Saúde e cuidado sem barreiras</h1>
          <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>

          <div className={s.botoes}>
            <a className={s.btnVerde} href="#">Seja Voluntário</a>
            <a className={s.btnBranco}href="#">Como Ajudar</a>
          </div>
        </div>

        <div className={s.medicoImg}>
          <img src={Medico} alt="medico voluntario sorrindo"/>
        </div>

      </section>

      <section className={s.boxMissao}>
        <div className={s.box1}>
        <h2>Nossa Missão</h2>
        <p>Transformar vidas através do acesso universal a saúde de qualidade.</p>

        <div className={s.valores}>
        <article>
          <h3>Acesso Equitativo</h3>
          <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
        </article>

        <article>
          <h3>Comunidade Forte</h3>
          <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
        </article>

        <article>
          <h3>Bem-estar Total</h3>
          <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
        </article>

        </div>
        </div>
      </section>

      <section className={s.boxImpacto}>
        <div className={s.box2}>
          <h2>Nosso Impacto</h2>
          <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>

          <div className={s.impacto}>
            <article>
              <h3>2,500+</h3>
              <p>Pessoas Atendidas</p>
            </article>

            <article>
              <h3>150+</h3>
              <p>Profissionais Voluntários</p>
            </article>

            <article>
              <h3>98%</h3>
              <p>Satisfação dos Pacientes</p>
            </article>

            <article>
              <h3>5+</h3>
              <p>Anos de Dedicação</p>
            </article>
          </div>
        </div>

      </section>
  
    </main>
  )
}

export default Home;
