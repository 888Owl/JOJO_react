import React from 'react';

import './Contact.css';

const Contact = () => {
    return(<>
      <br/>
        <div className="contact-container">
        <br/>
    <div className="contact-social">
      <p>香閣經紀團隊代表 <br/>
        副總：Jojo <br/>
        

        經紀人：佑庭、小志</p>
        <br/>
      <p className="contact-larger">請打手機（14：00過後）：0916162325 <br/> 或加 <br/> Line ID: C0961162325</p>
      <br/>
      <img src={require('../Images/j-line-min.png')} width="300px" height="300px" alt="jojo's Line QR"/>

    </div>
  </div>
  </>
  );
};

export default Contact;