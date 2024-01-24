import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to= '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/about'>Pekerja Kami</Link>
                        </li>
                        <li>
                            <Link to = '/contact'>Kontak</Link></li>
                    </ul>
                </nav>
               </div>
    )
}
export default Navbar