/* eslint-disable @typescript-eslint/no-explicit-any */
export default function NewsEventInformation({ event }: any) {
  const { totalEvent, totalNews } = event;
  return (
    <section className="border p-4">
      {event ? (
        <>
          {" "}
          <h1 className="font-medium text-lg my-1">Total Event {totalEvent}</h1>
          <h3>total news {totalNews}</h3>
        </>
      ) : (
        <h2>There is no such event</h2>
      )}
    </section>
  );
}
