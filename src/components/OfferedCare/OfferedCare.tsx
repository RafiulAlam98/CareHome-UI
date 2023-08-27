/* eslint-disable @typescript-eslint/no-explicit-any */
export default function OfferedCare({ caretypes }: any) {
  return (
    <div>
      <h2 className="text-lg border-b-gray-200 border-b-2 font-semibold my-1">
        Care Offered
      </h2>
      {caretypes?.map((offer: any) => (
        <ul key={offer.id}>
          <li className="text-sm ">{offer.careTypes}</li>
        </ul>
      ))}
    </div>
  );
}
