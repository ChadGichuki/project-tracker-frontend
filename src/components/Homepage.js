import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <div id="homePageDiv">
      <div id="homepageLeft">
    <Carousel fade>
       <Carousel.Item>
        <img
          className="first"
          src="https://chetenet.com/wp-content/uploads/2022/07/Moringa-School-Career-fair.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Collaborate</h3>
          <p>Testers don’t like to break things; they like to dispel the illusion that things work</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first"
          src="https://moringaschool.com/wp-content/uploads/2021/12/Student-Financing.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="first"
          src="https://moringaschool.com/wp-content/uploads/2022/09/moringa-devops-ms002-768x432.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Design</h3>
          <p>
          The best way to predict the future is to invent it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="first"
          src="https://seghana.net/wp-content/uploads/2022/05/IMGL0835-1-1024x683-1.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Imagine</h3>
          <p>
          If art interprets our dreams, the computer executes them in the guise of programs!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div id="homepageRight">
      <h1>Project Tracker</h1>
      <h4>Let all your projects live in one place.</h4>
    </div>
    </div>
  );
}

export default CarouselFadeExample;