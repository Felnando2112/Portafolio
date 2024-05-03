import meter1 from "../assets/javascript-svgrepo-com.svg";
import meter2 from "../assets/reactjs-svgrepo-com.svg";
import meter3 from "../assets/mysql-logo-svgrepo-com.svg";
import meter4 from "../assets/node-js-svgrepo-com.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are the technologies with which I operate.<br></br> I am quite familiar and comfortable with them.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>React Js And React Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter3}  alt="Image3" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image4" />
                                <h5>Node Js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}