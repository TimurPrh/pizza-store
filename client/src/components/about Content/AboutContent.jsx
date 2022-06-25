import './aboutContent.scss'

const AboutContent = () => {
  return (
    <section className='about-content'>
      <div className="about-content__description">
        <h3 className="about-content__header">
          Наша компания очень замечательная
        </h3>
        <div className="about-content__text">
          <p> Это простое уравнение, которое заставляет наших клиентов возвращаться за добавкой. Всегда свежие начинки и отличное обслуживание плюс низкие, низкие цены - это отличная пицца. Здесь, в Tasty Pizza, мы стремимся предоставить нашим клиентам самое лучшее. Мы - одна из немногих оставшихся семейных компаний, которые по-прежнему по-настоящему заботятся о наших клиентах. </p>

          <p> Наши клиенты могут рассчитывать на быстрое и качественное обслуживание, высококачественную еду, приготовленную из высококачественных продуктов с использованием самых свежих доступных ингредиентов, и отличные цены. Независимо от того, хотите ли вы накормить свою семью или организовать встречу или обед, накормить большую группу в Tasty Pizza легко и доступно. </p>

          <p> Компания Tasty Pizza работает с 1999 года и является рестораном быстрого питания, предлагающим доставку и доставку еды на вынос, коммерческое и институциональное питание. </p>
        </div>
      </div>
      <div className="about-content__duty">
        <div className="about-content__duty-time">
          <h4 className="about-content__duty-header">Режим работы</h4>
          <div className="about-content__duty-text">Пн - Вс: 8:00 - 22:00</div>
        </div>
        <div className="about-content__duty-communication">
          <h4 className="about-content__duty-header">Контакты</h4>
          <ul className="about-content__duty-list">
            <li className="about-content__duty-list-item">
              <div className="about-content__duty-list-key">Адрес</div>
              <div className="about-content__duty-list-value">
                г. Зеленодольск, ул. Комарова
              </div>
            </li>
            <li className="about-content__duty-list-item">
              <div className="about-content__duty-list-key">Телефон</div>
              <div className="about-content__duty-list-value">
                <a href="tel:+12345678">1-234-5678</a>
              </div>
            </li>
            <li className="about-content__duty-list-item">
              <div className="about-content__duty-list-key">Почта</div>
              <div className="about-content__duty-list-value">
                <a href='mailto:example@gmail.com' className='about-content__duty-link'>example@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-content__socials">
        <a href="https://facebook.com" className="about-content__socials-icon">
          <img src="assets/icons/socials/facebook.svg" alt="facebook" className="about-content__socials-img" />
        </a>
        <a href="https://instagram.com" className="about-content__socials-icon">
          <img src="assets/icons/socials/instagram.svg" alt="instagram" className="about-content__socials-img" />
        </a>
        <a href="https://twitter.com" className="about-content__socials-icon">
          <img src="assets/icons/socials/twitter.svg" alt="twitter" className="about-content__socials-img" />
        </a>
        
      </div>
    </section>
  );
};

export default AboutContent;