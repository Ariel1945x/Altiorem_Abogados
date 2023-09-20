import { Link } from "react-router-dom"
import Galery from "../components/Galery"

const Home = () => {
    return(
        <section className="home">
            <div className="home-div1">
                <h1 className="home-h1">¿Quiénes somos?</h1>
            </div>

            <div className="home-div2">
                <p className="home-p">
                Somos un equipo de profesionales guiados por nuestro compromiso con la calidad, nuestra cultura colaborativa y nuestros valores fundamentales que se ven materializados con nuestro enfoque inquebrantable en el cliente, adoptando como nuestra la urgencia de la misión de nuestros clientes en cada compromiso, aprovechando vastos recursos legales y trabajando de manera incansable, eficiente y eficazmente para lograr la justicia que nuestros clientes buscan.
                </p>
            </div>

            <div className="home-div3">
                <Link to="/contact"><button className="home-btn">¡Contáctanos!</button></Link>
            </div>

            <div className="home-div4">
                <Galery/>
            </div>
        </section>
        ) 
}

export default Home