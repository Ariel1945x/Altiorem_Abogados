import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = () => {

    const [opt, setNav] = useState(false)

    const active = () => {
        setNav(!opt)
    }

    return (
    <div className="nav">
        <div className="nav-div1">
            <img className="nav-img" src={"/img/alti.jpeg"} />
            <h1 className="nav-h1"><Link className="nav-h1" to="/">Altiorem Abogados</Link></h1>
        </div>

        <div className="nav-div2">
            <svg onClick={active} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/></svg>
            {opt && 
            <section className="menu">
                <ul className="nav-ul">
                    <li className="nav-li"><Link to="/" onClick={active}>Nuestra Firma</Link></li>
                    <li className="nav-li"><Link to="/staff" onClick={active}>Nuestro Staff</Link></li>
                    <li className="nav-li"><Link to="/servicios" onClick={active}>Nuestros Servicios</Link></li>
                    <li className="nav-li"><Link to="/contact" onClick={active}>Contáctenos</Link></li>
                </ul>
            </section>
            }
        </div>
    </div>
    )
}

export default Nav