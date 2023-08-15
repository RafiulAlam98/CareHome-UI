import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function About() {
  return (
    <section className="mx-auto my-5">
      <Link to="/">
        <img src={logo} alt="" className="w-28 mx-auto my-2" />
      </Link>
      <div>
        <h1 className="text-center text-[#2073BD] text-xl">
          Contact carehome.co.bd
        </h1>
        <h2 className="italic text-center  my-1 text-md">
          carehome.co.bd is published & owned by <br />
          Tomorrow's Guides Ltd
        </h2>
        <h3 className="mt-4 text-center">
          Tomorrow's Guides Ltd Unit 1, Station Yard <br />
          Station Road <br />
          Chittagong <br />
        </h3>
        <h3 className="text-center font-semibold my-5">
          If you have an enquiry with a Care Home or Supplier please do not
          email or telephone us, <br />
          contact the Care Home or Supplier direct – go to its profile page and
          click the tab Contact <br />
          Numbers or Send Email.
        </h3>
        <h3 className="text-center my-5">
          Our standard office hours are Monday to Friday 9am to 5pm (excluding
          Bank Holidays and the <br /> Xmas period). For urgent media enquiries
          outside these hours please click here.
        </h3>
        <span>
          <hr className="my-7" />
        </span>
      </div>
    </section>
  );
}
