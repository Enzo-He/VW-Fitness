import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'


const Gallery = () => {
  /* use for loop to push images into an empty array named images, 
      then, images can be used below to map images into Gallery page*/
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>

      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery