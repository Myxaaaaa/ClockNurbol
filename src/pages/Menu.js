import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Menu() {
    return (
        <>
            <Link to='/'>Главная</Link>
            <Link to='/Товары'>Магазин</Link>
        </>
    )
}

export default Menu
