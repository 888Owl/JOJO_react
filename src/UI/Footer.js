import React from 'react';

import './Footer.css';



const Footer = () => {
    console.log(window.height);
    return(
        <div className='footer-body'>
        <p id='footer_content'>Copyright © 2020 Jo-jo.club | Site Built by <a href='https://www.terminowl.com/' alt='Creators site.' >Terminowl</a></p>
        </div>
    );
};

export default Footer;