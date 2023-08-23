/* eslint-disable @typescript-eslint/no-explicit-any */
const offers = [
  {
    id: 1,
    name: "Alzheimer's",
  },
  {
    id: 2,
    name: "Bipolar/Manic Depression",
  },
  {
    id: 3,
    name: "Cancer Care",
  },
  {
    id: 4,
    name: "Challenging",
  },
  {
    id: 5,
    name: "Behaviour/Psychosis",
  },
  {
    id: 6,
    name: "Epilepsy",
  },
  {
    id: 7,
    name: "Head/Brain Injury",
  },
  {
    id: 8,
    name: "Hearing Impairment",
  },
  {
    id: 9,
    name: "Orthopaedic",
  },
  {
    id: 10,
    name: "Parkinson's Disease",
  },
  {
    id: 11,
    name: "Schizophrenia",
  },
  {
    id: 12,
    name: "Speech Impairment",
  },
  {
    id: 13,
    name: "Visual Impairment",
  },
];
export default function OfferedCare() {
  return (
    <div>
      <h2 className="text-lg border-b-gray-200 border-b-2 font-semibold my-1">
        Care Offered
      </h2>
      {offers.map((offer: any) => (
        <ul key={offer.id}>
          <li className="text-sm ">{offer.name}</li>
        </ul>
      ))}
    </div>
  );
}
