import Slider from "react-slick";

const images = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/doctor-talking-with-her-elder-patient_23-2148962314.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=ais",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/old-man-sitting-wheelchair-while-talking-nurse_23-2148239022.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=ais",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/long-shot-nurse-helping-old-woman-with-her-coat_23-2148239064.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=ais",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/senior-woman-with-her-caregiver-outdoor_1098-2987.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=ais",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/mediums-hot-smiley-people-indoors_23-2148940028.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=ais",
  },
];

export default function FeatureImages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {" "}
      <Slider {...settings}>
        {images.map((image) => (
          <div className="card w-100 glass my-4">
            <figure>
              <img src={image.img} alt="car!" />
            </figure>
          </div>
        ))}
      </Slider>
    </>
  );
}
