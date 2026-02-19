import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import '../layout/Contato.css'

function Contato(){
    return(
        <div id="contato">
            <div className="contato-container">

                <h1 className="contato-title">Entre em contato</h1>
                <p className="contato-subtitle">
                    Fale comigo pelo Instagram, WhatsApp ou envie uma mensagem abaixo.
                </p>

                <div className="contato-social">
                    <a
                        href="https://www.instagram.com/fernandomedeirospaisagismo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-social-link"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://wa.me/5512988531130?text=Olá%2C%20gostaria%20de%20mais%20informações"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-social-link"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                </div>

                <form className="contato-form">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="contato-input"
                    />
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        className="contato-input"
                    />
                    <textarea
                        placeholder="Sua mensagem"
                        className="contato-textarea"
                    />
                    <button type="submit" className="contato-btn">
                        Enviar mensagem
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contato;
