import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        {/* The {' '} gives space between links on browser */}
        <Link to='/'>Home</Link>{' '}
        <Link to='login' >Login</Link>
    </div>
  )
}
