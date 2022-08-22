import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState (false);

  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo' onClick = {() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {   //map一下所有的link，用NavLink shows which one is actived, we are on.
                    //links has written in data.js
                    links.map(({name,path}, index) => {
                        return(
                            <li key={index}>
                                {/* once clicked hide troggle-btn */}
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>
            {/* onclick set troggle-btn show or hide; once clicked hide troggle-btn */}
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {/* toggle-btn */}
                {
                    isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar