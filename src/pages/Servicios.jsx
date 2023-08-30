import serv from "../needs/dataserv"
import { useState } from "react"

const Servicios = () => {

    const infos = serv.info
    const [descrip, setDescrip] = useState(false)
    const [idActual, setIdActual] = useState(null)

    const active = (id) => {
        setDescrip(!descrip)
        setIdActual(id)
    }

    return (
        <section className="serv">
            <ul className="serv-ul">
                {
                    infos.map(info => (
                        <li className="serv-li" key={info.id}>
                            <div className="serv-div">
                                <img className="serv-img" src={info.img} />
                            </div>
                            <h2 className="serv-h2" onClick={() => active(info.id)}>{info.name}</h2>
                            {
                            idActual === info.id && 
                            descrip  && 
                            <p>{info.name}</p>
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Servicios