import { Link, useParams } from "react-router-dom";
import { useGetSingleFeatureQuery } from "../../redux/features/featureApi";
import Loading from "../Loading/Loading";
import HeroDetailsLink from "../FeatureDetailLinks/FeaturDetailLinks";
import FeatureImages from "../FeatueImages/FeatureImages";
import ProfessionalInfo from "../ProfessionalInfo/ProfessionalInfo";
import FeatureFunding from "../FeatureFunding/FeatureFunding";
import Performance from "../Performance/Performance";
import Reviews from "../Reviews/Reviews";
import Award from "../Award/Award";
import NewsEvent from "../NewsEvent/NewsEvent";
import OfferedCare from "../OfferedCare/OfferedCare";
import Facilities from "../Facilities/Facilities";

const icons = [
  {
    id: 1,
    icon: <i className="fa-brands fa-facebook"></i>,
  },
  {
    id: 2,
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    id: 3,
    icon: <i className="fa-brands fa-linkedin"></i>,
  },
  {
    id: 4,
    icon: <i className="fa-brands fa-whatsapp"></i>,
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-share"></i>,
  },
];

export default function HeroDetails() {
  const id = useParams();

  const { data: details, isLoading } = useGetSingleFeatureQuery(id.id);
  if (isLoading) {
    return <Loading />;
  }
  // console.log(details.data);
  const images = details.data.img;
  const {
    _id,
    title,
    location,
    website,
    logo,
    quote,
    owner,
    personIncharge,
    performance,
    localAuthority,
    admissionRestrictionAge,
    room,
    price,
  } = details.data;
  console.log(price);

  return (
    <div className="bg-[#FEFEFE] my-6">
      <div className="flex justify-between items-center">
        <div className="ml-2 ">
          <h2 className="text-3xl text-[#2073BD]">{title}</h2>
          <h3 className="font-light text-sm">{location}</h3>
        </div>
        <div className="flex justify-between items-center mr-2">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center ml-2">
        <button className="text-sm border-b-2 border-b-black font-normal">
          <i className="fa-solid fa-heart mr-1"></i> Save
        </button>
        <button className=" ml-5 text-sm border-b-2 border-b-black">
          <Link to={`/reviews/${_id}`}>
            <i className="fa-regular fa-pen-to-square mr-1  font-normal"></i>{" "}
            Submit a Review
          </Link>
        </button>
      </div>

      <div>
        {icons.map((icon) => (
          <button
            key={icon.id}
            className="mx-2 text-2xl my-2 hover: text-[#2073BD]"
          >
            <Link to=""> {icon.icon}</Link>
          </button>
        ))}
      </div>

      <HeroDetailsLink id={_id} website={website} />
      <FeatureImages images={images} id={_id} />

      <div className="mt-8 mx-4 text-sm font-serif ">{quote}</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 my-8 mx-4">
        <div className="mx-auto">
          <ProfessionalInfo
            owner={owner}
            personIncharge={personIncharge}
            localAuthority={localAuthority}
            admissionRestrictionAge={admissionRestrictionAge}
            room={room}
          />
        </div>
        <div className="mx-auto">
          <FeatureFunding price={price} title={title} />
        </div>
        <div className="mx-auto">
          <OfferedCare />
        </div>
        <div>
          <Facilities />
        </div>
      </div>

      
      <Reviews id={_id} />
      <Performance performance={performance} />
      <Award id={_id} />
      <NewsEvent id={_id} />
    </div>
  );
}
