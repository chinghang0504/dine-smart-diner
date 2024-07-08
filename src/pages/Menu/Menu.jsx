import { Outlet } from 'react-router-dom'
import './Menu.scss'

function menu() {
  return (
    <div className='menu'>
      <Outlet />
    </div>
  )
}

export default menu
