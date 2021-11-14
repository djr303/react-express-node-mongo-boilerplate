import React, { Fragment } from "react"
import Search from './Search'
import Logo from './Logo'
import Button from '@mui/material/Button';
import './Nav.css'

const Nav = () => (
  <nav>
    <div className="logo">
      <Logo />
    </div>
    <div className="search">
      <Search />
    </div>
    <div className="new">
      <Button href="/new">New</Button>
    </div>
  </nav>
)

export default Nav