import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__card">
                        <h4 className="footer__title">
                            Follow Us.
                        </h4>
                        <p className="footer__text">
                            We are always looking for new <br/>
                            projects and collaborations. <br/>
                            Feel free to contact us.
                        </p>
                        <span className="footer__icons">
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                       </span>
                    </div>
                    <div className="footer__card">
                        <h4 className="footer__title">
                            Contact Us.
                        </h4>
                        <address className="footer__text">
                            One Apple Park Way <br/>
                            Cupertino, CA 95014
                        </address>
                        <a href='tel:+996 (502) 505-502' className="footer__num">+996 (502) 505-502 </a> <br/>
                        <a href='#' className="footer__email">support@apple.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;