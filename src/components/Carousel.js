import { Carousel } from "react-bootstrap"
import "./Navbar.css"
function CarouselItem() {
    return (
        <Carousel   className="d-block mx-auto mt-0px carousel-inner " style={{ width: "75%", marginBottom: 40}} >
          <Carousel.Item>
    <img
      className="d-block w-100" height="500px" 
      src="https://img.myloview.com/stickers/asian-senior-or-elderly-old-lady-woman-patient-eating-breakfast-vegetable-healthy-food-with-hope-and-happy-while-sitting-and-hungry-on-bed-in-hospital-700-223810860.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100" height="500px"
      src="https://images.pexels.com/photos/6613050/pexels-photo-6613050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Safely Wrapping Food</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block h-40 w-100" height="500px"
      src="https://static.vecteezy.com/system/resources/previews/001/891/903/non_2x/chef-female-wearing-medical-mask-during-covid-19-free-vector.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Prepare Food in safe and clean Environment</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
     );
}
export default CarouselItem;