import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
// import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import {heroOne} from '../../components/Content/ContentData'
import './home.css'
import Content from '../../components/Content/Content'
import Form from '../../components/Form/Form'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Content {...heroOne} />
    <Values />
      <FAQs />
      <Form inverse />
    <Testimonials />
    </>
  )
}

export default Home