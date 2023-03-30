import Carousel, { CarouselItem } from "./Carousel.js";
import "./Carousel.css";

const Timeline = () => {
  return (
    <div className="App" style={{ marginBottom: "10vh" }}>
      <Carousel>
        <CarouselItem>
          <h2 className="day">Day 1</h2>
          <p className="date">09/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 2</h2>
          <p className="date">10/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 3</h2>
          <p className="date">11/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 4</h2>
          <p className="date">12/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 5</h2>
          <p className="date">13/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 6</h2>
          <p className="date">14/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 7</h2>
          <p className="date">15/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 8</h2>
          <p className="date">16/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 9</h2>
          <p className="date">17/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 10</h2>
          <p className="date">18/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 11</h2>
          <p className="date">19/02/2023</p>
        </CarouselItem>
      </Carousel>
    </div>
  );
};
export default Timeline;
