import { Link, Outlet } from 'react-router-dom'
import './Menu.scss'

function menu() {
  return (
    <div className='menu'>
      <div className="menu-header">
        <Link className='menu-header__link' to='/menu'><h1 className="menu-header__title">Menu</h1></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default menu
