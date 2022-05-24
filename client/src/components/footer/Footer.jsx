import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__location'>
          <h3 className='footer__location-header'>Наш адрес</h3>
          <div className='footer__location-description'>г. Зеленодольск, ул. Комарова</div>
          <div className='footer__location-iframe'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.9837745345886!2d48.56457618638171!3d55.85774401624732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415be2f300000001%3A0x9549b4bea3921d90!2sMr.Burger!5e0!3m2!1sru!2sru!4v1652721867999!5m2!1sru!2sru" width='100%' height='100%' style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='footer__line'></div>
        <div className='footer__copyright'>
          <a href='mailto:example@gmail.com' className='footer__copyright-link'>example@gmail.com</a>
          <a href="tel:+12345678" className='footer__copyright-link'>1-234-5678</a>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;