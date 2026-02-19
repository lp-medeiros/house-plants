import perfil from '../images/Perfil.jpg'
import '../layout/About.css'

function About(){
    return(
        <div id='sobre'>
        <div className="about-container">
            <div className="about-text">
                <h1>Sou Fernando! <span className="highlight">Fundador</span> da FMP Paisagismo.</h1>
                <p>A FMP Paisagismo nasceu da paixão pela <span className="highlight">natureza</span> e do desejo de transformar espaços em lugares que tocam a alma.</p>
                <p>Criamos projetos de paisagismo e jardinagem com um cuidado que vai além do visual: ouvimos cada cliente, entendemos seus sonhos e os traduzimos em espaços vivos, equilibrados e cheios de significado. Para nós, um jardim bem cuidado é saúde, é bem-estar, é qualidade de vida.</p>
                <p>Respeitamos profundamente a natureza em tudo que fazemos priorizando espécies adequadas, técnicas sustentáveis e o equilíbrio entre o que o homem projeta e o que a natureza já criou com perfeição.</p>
                <p>Do espaço residencial ao corporativo, entregamos sempre o mesmo compromisso: não apenas um jardim bonito, mas um lugar onde você vai <span className="emphasis">querer estar</span>.</p>
                <p className="closing">Venha crescer com a gente.</p>
            </div>
            <div className="about-image">
                <img src={perfil} alt="Foto de perfil"/>
            </div>
        </div>
        </div>
    )
}

export default About;