import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
    We want to educate our clients not just tell you what to do - Education is the key to long lasting results.
    </Header>

    <section className="container">
      <div className="container trainers_container">
        {  /* map trainers, but still need use arry put in their socials' link */
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [ /* there are four socials for each trainer, need to use arry */
                {icon: <BsInstagram/>, link: socials[0]}, 
                {icon: <AiOutlineTwitter/>, link: socials[1]}, 
                {icon: <FaFacebookF/>, link: socials[2]}, 
                {icon: <FaLinkedinIn/>, link: socials[3]}, 
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers