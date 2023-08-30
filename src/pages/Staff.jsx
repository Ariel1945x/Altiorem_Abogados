import lawyers from "../needs/database"

const Staff = () => {

    const abg = lawyers.info

    return (
        <section className="staff">
            <ul className="staff-ul">
                {
                    abg.map(abogado => (
                        <li className="staff-li" key={abogado.id}>
                            <h2 className="staff-h2">{abogado.name}</h2>
                            <hr className="staff-hr"/>
                            <img className="staff-img" src={abogado.img} />
                            <p className="staff-p">{abogado.info}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Staff