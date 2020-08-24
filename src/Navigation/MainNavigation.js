import React from 'react';

import './MainNavigation.css';
import DesktopNav from './DesktopNav';



class MainNavigation extends React.Component {
    constructor(){
        super();
        this.state={

        };
        this.handleSwap = this.handleSwap.bind(this);
    }



    handleSwap() {
        let loc = window.location.pathname;
        let x = document.getElementById(loc);
        return x.style.color.gold;
    };

    render(){
    return(<React.Fragment>
        <DesktopNav onClick={this.handleSwap}/>
        </React.Fragment>);
    }
};


export default MainNavigation;