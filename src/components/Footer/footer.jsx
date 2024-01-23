import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className='footer__wrapper'>
        <div className="footer__contact">
          <h3 className="footer__heading">Kontakt</h3>
          <div className='footer__adress'>
            Hotel Stříbrava<br />
            Ke Kamenné lávce 12<br />
            <br />
            <a href="mailto:recepce@hotelvydra.cz">recepce@hotelvydra.cz</a>
          </div>
        </div>
        <div className="image__container">
          <img className='image__vydra' src="../../../src/img/vydra.png" alt="hotel vydra" />
          <p className='image__description'>Hotel vydra</p>
        </div>
      </div>
    </footer>
  )
}