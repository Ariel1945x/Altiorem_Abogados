import lawyers from "../needs/database"

const Staff = () => {

    const abg = lawyers.info

    return (
        <section className="staff">
            <ul className="staff-ul">
                {
                    abg.map(abogado => (
                        <li className="staff-li" key={abogado.id}>
                            <div className="staff-div1">
                                <img className="staff-img" src={abogado.img}/>
                            </div>
                            <div className="staff-div2">
                                <h2 className="staff-h2">{abogado.name}</h2>
                                <hr className="staff-hr"/>
                                <p className="staff-p">{abogado.info}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Staff