import lawyers from "../needs/database"
import { useState } from "react"

const Staff = () => {

    const abg = lawyers.info
    const [ info, isInfo ] = useState(false)
    const [ idActual, setIdActual ] = useState(null)

    const activeInfp = (id) => {
        isInfo(!info)
        setIdActual(id)
    }

    return (
        <section className="staff">
            <ul className="staff-ul">
                {
                    abg.map(abogado => (
                        <li className="staff-li" key={abogado.id}>
                            <div className="staff-div1">
                                <img className="staff-img" src={abogado.img} onClick={() => activeInfp(abogado.id)}/>
                            </div>
                            { 
                            idActual === abogado.id &&
                            info &&
                            <div className="staff-div2" onClick={() => activeInfp(abogado.id)}>
                                <h2 className="staff-h2">{abogado.name}</h2>
                                <hr className="staff-hr"/>
                                <p className="staff-p">{abogado.info}</p>
                            </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Staff