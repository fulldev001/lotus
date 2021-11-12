import React from 'react'

import Nav from '../common/nav/Nav.js'
import Footer from '../common/footer/Footer.js'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact_container">
            <Nav />
            <div className="main">
                <div className="contact_element">
                    <h1 className="heading">Contact</h1>
                    <div className="contact_form">
                        <div className="input_group">
                            <label>What's your Name?</label>
                            <input type="text" />
                        </div>
                        <div className="input_group">
                            <label>What's your Email?</label>
                            <input type="email" />
                        </div>
                        <div className="input_group">
                            <label>Subject</label>
                            <input type="text" />
                        </div>
                        <div className="input_group">
                            <label>Message</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <div className="input_group">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
