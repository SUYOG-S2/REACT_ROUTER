import React from 'react';
import{Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="Main-Container">
        <div>
            <Link id='s' to = "/">Kalvium❤️‍🔥</Link>
        </div>
        <div className="Main-2">
            <Link id='s2'to = "/Contacts">Contacts</Link>
            <Link id='s2'to = "/Form">Form</Link>
            <Link id='s2'to = "/About">About</Link>
            <Link id='s2'to = "/Help">Help</Link>
            
        </div>
    </div>
  )
}

export default Navbar;