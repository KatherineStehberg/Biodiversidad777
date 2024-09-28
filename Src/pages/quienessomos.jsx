import React from 'react';
import '../assets/css/Quienessomos.css'; 

const QuienesSomos = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <a href="/">Biodiversidad.cl</a>
                </div>
                <ul className="nav-links">
                    <li><a href="./Projects.html">Productos</a></li>
                    <li><a href="./Services.html">Servicios</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./Contact.html">Contacto</a></li>
                    <li><a href="./Signup.html">Registrarse</a></li>
                    <li><a href="./Login.html" className="register-link">Iniciar Sesión</a></li>
                </ul>
            </nav>

            <header className="header">
                <div className="container">
                    <h1 className="main-title">Quiénes Somos</h1>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Conoce Más Sobre Nosotros</h2>
                    <p className="section-description">
                        En Biodiversidad.cl, estamos comprometidos con la conservación y la
                        biodiversidad. Conoce más sobre nuestra misión, visión y valores.
                    </p>
                    <div className="mission-vision-container">
                        <div className="mission-vision-card mission-text-right">
                            <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/mission-1.png" alt="Misión" />
                            <div className="content">
                                <h2>Misión</h2>
                                <p>
                                    Nuestra misión en Biodiversidad.cl es conectar a personas y organizaciones comprometidas con la conservación del medio ambiente y la diversidad biológica,
                                    facilitando el acceso a productos y servicios sostenibles. A través de nuestro marketplace, buscamos fomentar la responsabilidad ecológica 
                                    y apoyar iniciativas que contribuyan a la preservación de los ecosistemas, promoviendo un cambio positivo hacia un futuro más verde y sostenible.
                                </p>
                            </div>
                        </div>
                        <div className="mission-vision-card mission-text-left">
                            <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/vision_biodiversidad.png" alt="Visión" />
                            <div className="content">
                                <h2>Visión</h2>
                                <p>
                                    Nuestra visión es convertirnos en la principal plataforma de referencia en Chile y Latinoamérica para la compra y venta de productos y servicios relacionados
                                    con la biodiversidad. Aspiramos a ser un motor de cambio, donde cada transacción contribuya al bienestar del planeta y sus habitantes, 
                                    creando un impacto positivo en la conservación de la naturaleza y en la calidad de vida de las comunidades.
                                </p>
                            </div>
                        </div>
                        <div className="mission-vision-card mission-text-right">
                            <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/valores_biodiversidad.png" alt="Valores" />
                            <div className="content">
                                <h2>Valores</h2>
                                <p>
                                    Nos guiamos por la integridad, la pasión y el compromiso con la
                                    naturaleza y la comunidad.
                                </p>
                            </div>
                        </div>
                        <div className="mission-vision-card mission-text-left">
                            <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/history-biodiversidad.png" alt="Historia" />
                            <div className="content">
                                <h2>Historia</h2>
                                <p>
                                    Biodiversidad.cl nació como una iniciativa apasionada de un grupo de profesionales comprometidos con la conservación del medio ambiente y la promoción
                                    de prácticas sostenibles en Chile. La idea surgió en 2023, en un contexto donde el cambio climático y la pérdida de biodiversidad se habían convertido en temas críticos a nivel global. 
                                    Conscientes de la urgente necesidad de actuar, decidieron crear una plataforma que conectara a personas y organizaciones interesadas en la protección de la biodiversidad.
                                    El proyecto comenzó como un simple blog informativo, donde se compartían noticias, investigaciones y consejos sobre conservación y sostenibilidad. 
                                    Sin embargo, pronto se dieron cuenta de que había una demanda creciente por productos y servicios que respetaran los principios de sostenibilidad y conservación. 
                                    Así, Biodiversidad.cl evolucionó hacia un marketplace especializado, donde se ofrecen productos ecológicos, servicios de consultoría ambiental, y se promueven proyectos que apoyan la biodiversidad.
                                    
                                    El crecimiento de la plataforma ha sido sostenido gracias a la colaboración con diversas ONGs, empresas sostenibles y expertos en medio ambiente, que han aportado su conocimiento y
                                    experiencia. Hoy en día, Biodiversidad.cl no solo es un lugar para comprar y vender, sino una comunidad donde se comparte un compromiso común: proteger nuestro planeta para las futuras generaciones.
                                    La historia de Biodiversidad.cl es una historia de innovación y compromiso, que sigue escribiéndose con cada nuevo paso hacia un futuro más verde y consciente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
                    <div className="contact-social-container">
                        <p className="contact-info">
                            Contacto:
                            <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a>
                        </p>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default QuienesSomos;