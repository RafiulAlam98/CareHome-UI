/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AwardInformation({ award }: any) {
  console.log(award);
  const { awardTitle, awardDescription } = award;
  console.log(award);
  return (
    <section className="border p-4">
      <h1 className="font-medium text-lg my-1">
        {awardTitle} <br />
      </h1>

      <h3>{awardDescription}</h3>
    </section>
  );
}
