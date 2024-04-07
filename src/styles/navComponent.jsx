import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://www.bmw.in/content/dam/bmw/common/all-models/m-series/m4-coupe/2020/highlights/bmw-4-series-coupe-m-automobiles-mc-m-performance-parts-hero-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1627456606178.jpg" width={"100%"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="https://bmw.scene7.com/is/image/BMW/iX_Banner:16to9?fmt=webp&wid=1504&hei=846" width={"100%"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="https://www.bmw.in/content/dam/bmw/common/all-models/m-series/m760e-xdrive/2023/highlights/bmw-7-series-i7-m70-gallery-image-impressions-04-890.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1679568206645.jpg" width={"100%"}  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;