import '../layout/Navbar.css'
import logo from '../images/logo.jpg'
import { useState, useEffect } from 'react';

function Navbar(){
    const [active, setActive] = useState('sobre')

    useEffect(() => {
        const sections = ['sobre', 'portifolio', 'contato'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <nav className='nav'>
            <div className='nav-brand'>
                <img src={logo} alt='fmp-logo'></img>
            </div>
            <ul className='nav-links'>
                <li><a href="#sobre" className={active==='sobre' ? 'nav-active' : ''} onClick={() => setActive('sobre')}>Sobre nós</a></li>
                <li><a href="#portifolio" className={active==='portifolio' ? 'nav-active' : ''} onClick={() => setActive('portifolio')}>Portifólio</a></li>
                <li><a href="#contato" className={active==='contato' ? 'nav-active' : ''} onClick={() => setActive('contato')}>Contato</a></li>
            </ul>
            <div></div>
        </nav>
    )
}

export default Navbar;