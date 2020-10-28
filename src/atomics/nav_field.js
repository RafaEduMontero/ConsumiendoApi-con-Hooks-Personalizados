import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'

const NavField = () => {
 return (
   <Fragment>
       <ul className='nav bg-primary'>
              <li className='nav-item'>
                <Link className='nav-link active text-white' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/books'>
                  Post
                </Link>
              </li>
        </ul>
   </Fragment>
 )
}

export default NavField;