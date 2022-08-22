import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelephoneForward} from 'react-icons/bs'


import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
    </Header>

    <section className='contact'>
      <div className="container contact_container">
      <div className="contact_wrapper">
          {/* <h2>Moble: 0450679835</h2> */}
        <a href="tel: 0450679835" target="_blank" rel="noreferrer noopener"><BsTelephoneForward/></a>
        <a href="mailto:enzoenzohe@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
        <a href="htpp://Myfacebook emssenger address" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
        <a href="http://whatsapp address" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
      </div>
      </div>
    </section>
    </>
  )
}

export default Contact