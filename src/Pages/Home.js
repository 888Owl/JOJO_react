import React from 'react';

import './Home.css';


const Home = () => {
  return (<div className="home-display">
    <div className="index-intro">
      <br />
      <p className="body-p">女孩們是否有以下煩惱： <br /> 
        卡債？房貸？學貸？ <br /> 
        想出國深造？投資？ <br /> 
        想要有自己的房、車？ <br /> 
        加入我們，給妳最大的保障！</p> 

      <h2 className="index-directions">詳細內容請點擊上方聯絡方式以及工作機會</h2>
      <br />
      <img src={require('../Images/hours-min.png')} className="responsive-1" alt='hours' />
      <br />
      <img src={require('../Images/incentives-min.png')} className="responsive-1" alt='perks' />

    </div>
  </div>);
};


export default Home;