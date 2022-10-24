import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
class Slider extends Component {
  render() {
    return (
      <>
     <Carousel>
                    <Carousel.Item>
                        {/* <video style={{height:360,width:'100%'}} controls */}
                         <video 
                         autoPlay 
                         loop
                         playsInLine
                         className="video-background" 
                         muted
                         style={{height:500,width:'100%'}}
                       >
                            <source src="https://muhlenberg.shorthandstories.com/Viewbook2020/assets/0njgRu5Z94/campushome.mp4" 
type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
</Carousel>
</>
    );
  }
}

export default Slider;