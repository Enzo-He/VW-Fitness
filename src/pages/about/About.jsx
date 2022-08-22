import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        From the very beginning VW Fitness was born from a place of evolution.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Back in 1996, we opened as VW of Australia's first personal training studios.
            </p>
            <p>
              Only months later we realized that our clients didn't want to head off to a big commercial gym to perform their day-to-day exercise, they wanted something more private, with a greater focus on community and results.
            </p>
            <p>
              It was from this realization that the foundation of the VW Fitness model was created.
            </p>
          </div>
        </div>
      </section>

      <section className="about_Vision">
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              For well over two decades now, VW Fitness has inspired thousands of people to get off their arses and achieve amazing things.

              At VW Fitness, our focus is on cultivating a real-life health and fitness community, united by a mutual passion to participate, learn and progress.
            </p>
            <p>
              So why, after more than two decades, is VW Fitness still thriving in a world where new gyms seem to come and go in a heartbeat?
              Because combining scientifically-proven training systems with genuine passion, support and understanding, actually works.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>


      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Difference</h1>
            <p>
              We have designed a system that will flex with you…as your psyche changes.            </p>
            <p>
              We suit the process to the client not the client to the process. As such, We are curators of fitness – the keeper or custodians of our members’ health and fitness. Working with the members to curate the best possible results.            </p>
            <p>
              Our job is to be constantly analysing, guiding and adapting a client, not merely telling them to stick with it.
              Our single job is to ensure they don’t quit their health goals.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About