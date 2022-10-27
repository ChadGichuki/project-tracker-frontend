import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
       <Carousel.Item>
        <img
          className="first"
          src="https://chetenet.com/wp-content/uploads/2022/07/Moringa-School-Career-fair.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
{/*      
      <Carousel.Item>
        <img
          className="first"
          src=""
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

      <Carousel.Item>
        <img
          className="first"
          src="https://moringaschool.com/wp-content/uploads/2022/09/moringa-devops-ms002-768x432.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFadeExample;