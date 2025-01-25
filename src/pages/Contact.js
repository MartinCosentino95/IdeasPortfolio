// Contact.js: Página "Contacto"
import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contacto</h2>
            <form>
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu email" required />
                <textarea placeholder="Tu mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
