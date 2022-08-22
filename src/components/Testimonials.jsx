import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"






const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

    /* setting backward */
    const prevTestimonialHandler = () => {
        /* index from 0, 也就是说index的0对应length的1 */
        setIndex(prev => prev - 1);
        
        if(index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }

    /* setting forward */
    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1) {
            setIndex(0);
        }
    }


  return (
    <section className="testimonials">
        <div className="container testimonials_container">

            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials_head"/>

            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name} />
                </div>
                {/* quote 因为想要引入“” 所以要写成  `"${quote}"` */}
                <p className="testimonial_quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial_title">{job}</small>
            </Card>

            <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn"  onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials