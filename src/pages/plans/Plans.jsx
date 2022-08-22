import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'

import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Mmbership Plans" image={HeaderImage}>

    </Header>

    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              {/* template literal */}
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>futures</h4>
              {
                features.map (({feature, available},index) => {
                  /* !available : if available is false (negates expression) 
                        -selfcheck, if available is false, return disabled on classname,
                         then, I can use disable to set font color in CSS file*/
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }

              <button className="btn lg">Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans