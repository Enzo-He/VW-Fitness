import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        {/* header slip to two part, left and right
            left: we write words 
            right: there is a picture */}
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
          There are times to suit everyone. Whether it’s early morning, during the day or in the evening, we have small-group sessions scheduled to match you and your lifestyle.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>

        <div className="main_header-right">
            {/* yellow circle */}
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader