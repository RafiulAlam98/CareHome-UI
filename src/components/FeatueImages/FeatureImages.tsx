/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";

export default function FeatureImages({ images }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((image: any) => (
          <div className="card w-100 glass my-4">
            <figure>
              <img src={image} alt="car!" />
            </figure>
          </div>
        ))}
      </Slider>
    </>
  );
}
