import React from 'react'
// Import Link to create navigation links
import { Link } from 'react-router-dom'

// Give each Link a to='/...' (some path) amd inner text

export const Nav = () => {
  return (
    <div>
        {/* The {' '} gives space between links on browser */}
        <Link to='/'>Home</Link>{' '}
        <Link to='/login' >Login</Link>
    </div>
  )
}
