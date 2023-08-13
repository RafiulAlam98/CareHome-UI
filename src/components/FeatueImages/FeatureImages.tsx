/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
// import { useGetImagesQuery } from "../../redux/images/ImageApi";

export default function FeatureImages({ id, images }: any) {
  console.log(id);
  // const { data } = useGetImagesQuery(id);
  // const images = data.img;
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
          <div key={image._id} className="card w-100 glass my-4">
            <figure>
              <img src={image} alt="car!" />
            </figure>
          </div>
        ))}
      </Slider>
    </>
  );
}
