import './about.css'
import Mujer from '../../img/mujer-fotografa.jpg'
import Award from './Award'

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Mujer} alt="Mujer" className='a-img' />
        </div>
      </div>

      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error inventore, fugiat minima iusto non minus esse impedit cum est.
        </p>
        <p className='a-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi delectus eligendi illum ab nisi dicta esse, officia non! Eaque temporibus harum error corporis, earum voluptate dolore. Aliquid, velit fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam voluptas nihil quae facere.
        </p>
        <div className="a-award">
          <Award />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis voluptatum aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About