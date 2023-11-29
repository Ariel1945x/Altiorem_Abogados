
const InputsOfcontact = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const mailtoLink = `mailto:bravo.altiorem@gmial.com?subject=${formData.get('name')}&body=${formData.get('msg')}`;
        window.location.href = mailtoLink;
    };

    return (
        
        <section className="inputs">
            <form onSubmit={handleSubmit} className="inputs-form">
                <label htmlFor="name">Nombre</label>
                <input name="name" type="text" id="name" className="inputs-input" />
        
                <label htmlFor="email">Tema</label>
                <input name="email" type="email" id="email" className="inputs-input" />
        
                <label htmlFor="msg">Mensaje</label>
                <textarea className="inputs-input" name="msg" id="text" cols="30" rows="5"></textarea>
        
                <button className="inputs-btn" type="submit">ENVIAR</button>
            </form>
        
            <a href="mailto:aeriael43@gmail.com" className="inputs-a"></a>
        </section>
    )
}
export default InputsOfcontact