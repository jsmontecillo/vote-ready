import Carousel from 'react-bootstrap/Carousel';
import la from './la.jpg';
import la2 from './la2.jpg';
import la3 from './la3.webp';

function UncontrolledExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={la}
          alt="First slide"
          style={{height: "600px", objectFit: "cover"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={la2}
          alt="Second slide"
          style={{height: "600px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={la3}
          alt="Third slide"
          style={{height: "600px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            A voter fills out their ballot at a voting site at the Hamilton School gymnasium in central Fresno on June 7, 2022. Photo by Larry Valenzuela, CalMatters/CatchLight Local
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;