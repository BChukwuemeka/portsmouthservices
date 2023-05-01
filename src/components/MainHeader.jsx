import './components.css'
import {Link} from 'react-router-dom'
import Himage from '../images/containerpics/hero_container_.png'
import HeroVideo from '../images/video/Herovideo.mp4'
import { ContentButton } from './Content/ContentStyles'
import { motion } from 'framer-motion'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className='overlay'></div>
      <video src={HeroVideo} autoPlay loop />
      <div className="container main__header-container">
          <div className="main__header-left">
            <h3>Portsmouth Containers</h3>
            <h1>Get Great deals on New and Used premium quality shipping containers</h1>
          <p>committed to build and retain long-term trusted partnership with customers of all sizes and scale.</p>
           <Link to='/plans' > <ContentButton className="">Get Started</ContentButton></Link>
          </div>
        <motion.div
          className="main__header-right"
          initial={{ x: "-300px", opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
        >
              <div className="main__header-circle"></div>
              <div className="main__header-image">
                <img src={Himage} alt="main__header-img" />
              </div>
          </motion.div>
      </div>
    </header>
  )
}

export default MainHeader