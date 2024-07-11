import { Outlet, useNavigate } from 'react-router-dom'
import './Menu.scss'
import { useEffect } from 'react';

function Menu() {
  const navigate = useNavigate();

  useEffect(() => {
    const tableId = sessionStorage.getItem('tableId');
    if (!tableId) {
      navigate('/noid');
    }
  });

  return (
    <div className='menu'>
      <Outlet />
    </div>
  )
}

export default Menu
