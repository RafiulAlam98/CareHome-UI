import { Link } from "react-router-dom";

const careSearch = [
  {
    id: 1,
    path: "care-homes",
    title: "Care Homes",
  },
  {
    id: 2,
    path: "care-housing",
    title: "Extra Care Housing",
  },
  {
    id: 3,
    path: "adult-care",
    title: "Adult Day Care Centres",
  },
  {
    id: 4,
    path: "mental-care",
    title: "Mental Health Hospital",
  },
  {
    id: 5,
    path: "groups",
    title: "Groups",
  },
  {
    id: 6,
    path: "care-helpline",
    title: "Care HelpLine",
  },
  {
    id: 7,
    path: "awards",
    title: "Awards",
  },
  {
    id: 8,
    path: "review",
    title: "Submit a Review",
  },
];

const careAdvice = [
  {
    id: 1,
    path: "care-advice",
    title: "Care Advice Overview",
  },
  {
    id: 2,
    path: "fees-advice",
    title: "Fees Advice ",
  },
  {
    id: 3,
    path: "who-pays",
    title: "Who Pays for What ",
  },
];

const jobSeacrh = [
  {
    id: 1,
    path: "jobs",
    title: "Jobs",
  },
  {
    id: 2,
    path: "cv",
    title: "Register CV",
  },
  {
    id: 3,
    path: "job-advice",
    title: "Jobs Advice",
  },
];

const industryResourec = [
  {
    id: 1,
    path: "product-service",
    title: "Products & Service",
  },
  {
    id: 2,
    path: "care-sell",
    title: "Care Home For Sale",
  },
  {
    id: 3,
    path: "training-course",
    title: "Training Courses",
  },
  {
    id: 4,
    path: "news-event",
    title: "News & Event",
  },
];

const myAccount = [
  {
    id: 1,
    path: "account",
    title: "Account",
  },
  {
    id: 2,
    path: "care-seekers",
    title: "Care Seekers",
  },
  {
    id: 3,
    path: "my-shortlist",
    title: "My Shortlist",
  },
  {
    id: 4,
    path: "save-shortlist",
    title: "My Save Shortlist",
  },
  {
    id: 5,
    path: "recently-viewed",
    title: "Recently Viewed Care Homes",
  },
];
const careHomeContact = [
  {
    id: 1,
    path: "about",
    title: "About",
  },
  {
    id: 2,
    path: "promote",
    title: "Promote Your Care Home",
  },
];

export default function FooterItems() {
  return (
    <div className="bg-[#2073BD]">
      <div className="max-w-[1200px] py-10 mx-auto grid gap-3 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3">
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            Care Search
          </h1>
          {careSearch.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            Care Advice
          </h1>
          {careAdvice.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            Job Search
          </h1>
          {jobSeacrh.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            Industry resource
          </h1>
          {industryResourec.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            My Account
          </h1>
          {myAccount.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-semibold mb-1 border-b-2 border-b-white ">
            Care Home Contact
          </h1>
          {careHomeContact.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-white font-semibold text-sm hover:border-b hover:border-b-white"
                to=""
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
