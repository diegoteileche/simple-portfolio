import './intro.css'
import Messi from '../../img/messi-argentina-trans.png'
import Mouse from './Mouse'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Lionel Messi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>
        </div>
        <Mouse />
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Messi} className='i-img' alt='Messi' />
      </div>
    </div>
  )
}

export default Intro