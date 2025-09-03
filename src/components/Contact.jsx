import { useState } from "react";
import unfollow from '../assets/star_white.png'
import follow from '../assets/star_yellow.png'

const Contact = (props) => {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itmyrealname@example.com",
        isFavorite: false
    })
    function toggleFavorite(){
        setContact((prevalue)=>{
            return {
                ...prevalue,
                isFavorite:!prevalue.isFavorite
            };
        });
    }
    let logo=contact.isFavorite?follow:unfollow;
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <button 
                onClick={toggleFavorite}
                aria-pressed={contact.isFavorite}
                aria-label={contact.isFavorite?"Remove from favorite":"add to favorite"}
                className="favorite-button"
            >
                <img 
                    src={logo} 
                    alt={contact.isFavorite?"Filled star icon":"empty star icon"}
                    className="favorite"

                />

                </button>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <div className="info-group">
                <p>📞: {contact.phone}</p>
            </div>
            <div className="info-group">
                <p>📩: {contact.email}</p>
            </div>
        </article>
    );
}

export default Contact;