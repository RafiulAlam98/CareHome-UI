// import Rating from "react-rating";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ReviewInformation({ review }: any) {
  const { reviewerName, reviewPublisDate, reviewDescription } = review;
  return (
    <section className="border p-4">
      {" "}
      <h1 className="font-medium text-lg my-1">
        Review from {reviewerName} published on <br />
        {reviewPublisDate}
      </h1>
      <h2 className="font-medium text-lg my-1 inline">Overall Experience </h2>{" "}
      {/* <Rating
        className="text-[#458F00] inline"
        initialRating={overallExperience}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        readonly
      /> */}
      <h3>{reviewDescription}</h3>
    </section>
  );
}
