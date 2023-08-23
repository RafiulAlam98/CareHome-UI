/* eslint-disable @typescript-eslint/no-explicit-any */
const facilities = [
  {
    id: 1,
    name: "Gardens",
  },
  {
    id: 2,
    name: "Ground Floor Accommodation only",
  },
  {
    id: 3,
    name: "Lift",
  },
  {
    id: 4,
    name: "Minibus or other transport",
  },
  {
    id: 5,
    name: "Own Furniture if required",
  },
  {
    id: 6,
    name: "Pet Friendly (or by arrangement)",
  },
  {
    id: 7,
    name: "Phone Point in own room/Mobile",
  },
  {
    id: 8,
    name: "Television point in own room",
  },
  {
    id: 9,
    name: "Wheelchair Access",
  },
];
export default function Facilities() {
  return (
    <div>
      <h2 className="text-lg border-b-gray-200 border-b-2 font-semibold my-1">
        Facilities
      </h2>
      {facilities.map((offer: any) => (
        <ul key={offer.id}>
          <li className="text-sm ">{offer.name}</li>
        </ul>
      ))}
    </div>
  );
}
