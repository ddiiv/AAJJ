import { BrowserRouter as Routes, Link } from "react-router-dom";
import '../../css/NavBar.css'

const BottomNav = ({category}) => {
    return (
        <div className='nav'>
            {category?.map((categories) => {
                return <li className='nav-item' key={categories.IdCategory} ><Link to={`/category/${categories.Category}`} id="a" className='navItem'>{categories.Category}</Link></li>
            })}

        </div>
    )
}
export default BottomNav;