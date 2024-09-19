import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import TestimonialCard from "./TestimonialCard";

const Testomonial = () => {
  const [datas, setDatas] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("./testomonialData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === datas.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? datas.length - 1 : currentSlide - 1);
  };

  return (
    <div className="mt-24 px-3">
      <Container>
        <div>
          {datas?.map(
            ({ id, image, testimonial, title, name }, idx) =>
              currentSlide === idx && (
                <TestimonialCard
                  key={id}
                  name={name}
                  title={title}
                  desc={testimonial}
                  img={image}
                  nextSlide={nextSlide}
                  prevSlide={prevSlide}
                ></TestimonialCard>
              )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Testomonial;
