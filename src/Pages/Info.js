import React from "react";

import './Info.css';

const Info = () => {
  return (
    <div className='info-div_main'>
    <br/>
    <br/>
      <div className="info-address">
        <p>
          台北市忠孝東路四段270號B1 B1, No. 270, Sec 4, Zhongxiao E.Rd., Xinyi<br/>
          Dist., Taipei 最近捷運：國父紀念館站
        </p>
      </div>

      <div className="info-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8042740731653!2d121.55366258326802!3d25.04071550734778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc670069c57%3A0xb5283c40301f0aaf!2sB1%2C+No.+270%2C+Section+4%2C+Zhongxiao+East+Road%2C+Da%E2%80%99an+District%2C+Taipei+City%2C+Taiwan+106!5e0!3m2!1sen!2sus!4v1553210117666"
          className="responsive-map"
          frameBorder="1"
          title="jo-jo location"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Info;