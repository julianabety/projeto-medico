import s from './footer.module.scss';
import Logo from '../../assets/logo.png';
import Msg from '../../assets/msg.png';
import Tel from '../../assets/tel.png';
import Local from '../../assets/local.png';


const Footer = () => {
  return (
    <footer>
      <section className={s.footer}>
        <div className={s.containerF}>
            <article>
                <div className={s.linhaLogo}>
                    <img src={Logo} alt="logotipo"/>
                    <h3>Médicos & Dentistas</h3>
                </div>
                <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
            </article>

            <article>
                <h3>Contato</h3>
                <div className={s.linhaImg}>
                    <img src={Msg} alt="Icone de e-mail"/>
                    <p>contato@medico-dentista.org</p>
                </div>
                <div className={s.linhaImg}>
                    <img src={Tel} alt="icone de telefone"/>
                    <p>(11) 3000-0000</p>
                </div>
                <div className={s.linhaImg}>
                    <img src={Local} alt="icone de localização"/>
                    <p>São Paulo, Brasil</p>
                </div>
            </article>

            <article>
                <h3>Redes Sociais</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </article>
        </div>

        <div className={s.direito}>
           <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
