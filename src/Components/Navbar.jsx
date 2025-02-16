import React from 'react'

import Logo from '../logo.png'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >

        <img className='w-[50px]' src={Logo} alt=""/>

        <Link to='/' className='text-blue-400 text-xl font-bold'>Movies</Link>
        <Link to='/Watchlist' className='text-blue-400 text-xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar