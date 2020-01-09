import React from 'react';

import './MainNavigation.css';
import DesktopNav from './DesktopNav';

const MainNavigation = () => {
    return(<React.Fragment>
        <button className='button-mobile_burger'>
        <span />
        <span />
        <span />
        </button>
        <DesktopNav />
        </React.Fragment>);
};


export default MainNavigation;