// import React from "react";
// import {GrCart} from react-ico
import {GrCart} from 'react-icons/gr'

function Header() {
    return(
        <header className='bg-blue-500 text-lg text-white p-4'>
            <h1 className=' font-bold italic'>Shoppify</h1>
            {/* GrCart */}
            <GrCart/>
        </header>
    )
    
}

export default Header;