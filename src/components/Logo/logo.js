import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 100, width: 100 }} >
 <div className="Tilt-inner pa3"> 
 <img style={{paddingTop: '3px'}} alt='logo' src={logo}></img> 
 </div>
</Tilt>
        </div>
    );
}
export default Logo;