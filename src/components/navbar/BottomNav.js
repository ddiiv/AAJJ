import React, { useState, useEffect } from 'react'
import { BrowserRouter as Routes, Link } from "react-router-dom";
import { getCategories } from '../../api/apiFunctions.js';
import '../../css/NavBar.css'

const BottomNav = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        getCategories()
            .then(Categories => {
                setCategory(Categories)
            })
    }, [])
   

    return (
        <div className='nav'>
            {category.map((categories) => {
                return <li className='nav-item' key={categories.IdCategory} ><Link to={`/category/${categories.Category}`} id="a" className='navItem'>{categories.Category}</Link></li>
            })}

        </div>
    )
}
export default BottomNav;