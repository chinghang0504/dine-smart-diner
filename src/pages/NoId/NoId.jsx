import './NoId.scss';
import SorryImage from '../../assets/images/sorry.jpg';

function NoId() {
  return (
    <div className='noid'>
      <div className='noid-header'>
        <h1 className='noid-header__title'>Invalid ID</h1>
      </div>
      <div className='noid-content'>
        <img className='noid-content__image' src={SorryImage} alt="Sorry for inconvenience" />
        <p className='noid-content__description'>Your ID is invalid.<br />Please rescan the QR Code!</p>
      </div>
    </div>
  )
}

export default NoId
