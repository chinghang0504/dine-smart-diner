import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/logos/main-logo-white-transparent.svg';

function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <Link className='header-logo__logo' to="/">
          <img className='header-logo__image' src={Logo} alt="logo" />
          <h1 className='header-logo__title'>DineSmart</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header
