import s from './voluntario.module.scss';

const Voluntario = () => {
  return (
    <>
    <section className={s.boxVol}>
      <h1>Seja Voluntário</h1>
      <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      <div className={s.cardsV}>
        <article>
          <h2>Impacto Direto</h2>
          <p>Sua dedicação salva vidas e transforma comunidades</p>
        </article>

        <article>
          <h2>Crescimento Pessoal</h2>
          <p>Desenvolva habilidades e cresça profissionalmente</p>
        </article>

        <article>
          <h2>Comunidade</h2>
          <p>Faça parte de uma rede de profissionais comprometidos</p>
        </article>
      </div>
    </section>

    <section className={s.form}>
      
      <section className={s.contForm}>
        <h2>Inscrição para Voluntários</h2>

            <form className={s.boxForm}>
              <h3>Dados Pessoais</h3>
              <div className={s.dados}>
                  <input type="text" placeholder="Seu Nome *" />
                  <input type="email" placeholder="Seu Email *" />
              </div>

              <div className={s.dados}>
                  <input type="text" placeholder="Seu Telefone *" />
              </div>

              <h3>Mensagem Adicional</h3>

              <textarea placeholder="Conte-nos porque você quer ser voluntário..." rows={6}></textarea>

              <p className={s.info}> Entraremos em contato para mais informações</p>

              <button type="submit" className={s.btn}>Enviar Inscrição</button>
            </form>
            
      </section>

    </section>

    </>
  )
}

export default Voluntario;
