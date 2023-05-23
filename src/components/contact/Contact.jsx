import './contact.css'
import Phone from '../../img/phone.svg'
import Email from '../../img/email-svgrepo-com.svg'
import Address from '../../img/address-location-map-svgrepo-com.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
/* import { useRef } from 'react' */
/* import emailjs from '@emailjs/browser' */

const Contact = () => {
  /* const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    emailjs.sendForm(
      'service_hjp06vx',
      'template_pajx1tk',
      formRef.current,
      '7nSCeTg07kwguM79U'
    )
    e.target.reset()
  } */

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let´s discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className='c-icon' />
              +54 123 456 789
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              diego@teileche.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              2345 San Miguel del Monte, Buenos Aires, Argentina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What´s your story?</b> Get in touch. Always available for freelancing id the right project comes along me.
          </p>
          <form /* ref={formRef} onSubmit={handleSubmit} */ >
            <input style={{backgroudColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' />
            <input style={{backgroudColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject' />
            <input style={{backgroudColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
            <textarea style={{backgroudColor: darkMode && '#333'}} rows="5" placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact