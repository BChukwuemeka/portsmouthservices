import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.png'
import { Link } from 'react-router-dom';





const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength ; i++ ) {
      images.push(require(`../../images/containerpics/images${i}.jpeg`));

  }


  return (
    <>
    <Header title="Gallery" image={HeaderImage}>
   
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
          {
            images.map((image, index) => {
             return (
                <article key={index}>
                 <Link to='/products'>
                   <img src={image} alt={`gallery img ${index + 1}`} />
                </Link>
                </article>
              )
            })
          }
      </div>
    </section>
    </>
  )
}

export default Gallery