import { Carousel } from "react-bootstrap"

import React from "react"
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from "cdbreact"

import "./Navbar.css"
function CarouselItem() {
  return (
   
        <CDBCarousel className="d-block mx-auto carousell" style={{ width: "80%", marginBottom: 30 }} activeItem={1} length={3} showControls={true} showIndicators={true} slide>
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                <img
                  className="d-block w-100"
                  src="https://img.myloview.com/stickers/asian-senior-or-elderly-old-lady-woman-patient-eating-breakfast-vegetable-healthy-food-with-hope-and-happy-while-sitting-and-hungry-on-bed-in-hospital-700-223810860.jpg"
                  alt="First slide"
                />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                <img className="d-block w-100"   src="https://images.pexels.com/photos/6613050/pexels-photo-6613050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Second slide" />
              </CDBView>
              <Carousel.Caption>
              <h3>Safely Wrapping Food</h3>
            </Carousel.Caption>
           
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                <img className="d-block w-100"    
                   src="https://static.vecteezy.com/system/resources/previews/001/891/903/non_2x/chef-female-wearing-medical-mask-during-covid-19-free-vector.jpg"
               alt="Third slide" />
              </CDBView>
              <Carousel.Caption>
              <h3>Prepare Food in safe Environment</h3>
             </Carousel.Caption>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
   

    // <Carousel className="d-block mx-auto " style={{ width: "75%", marginBottom: 40 }}>
    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100"
    //       height="500px"
    //       src="https://img.myloview.com/stickers/asian-senior-or-elderly-old-lady-woman-patient-eating-breakfast-vegetable-healthy-food-with-hope-and-happy-while-sitting-and-hungry-on-bed-in-hospital-700-223810860.jpg"
    //       // alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>l</h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100"
    //       height="500px"
    //       src="https://images.pexels.com/photos/6613050/pexels-photo-6613050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //       // alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Safely Wrapping Food</h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100"
    //       height="500px"
    //       src="https://static.vecteezy.com/system/resources/previews/001/891/903/non_2x/chef-female-wearing-medical-mask-during-covid-19-free-vector.jpg"
    //       // alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Prepare Food in safe and clean Environment</h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  )
}
export default CarouselItem
