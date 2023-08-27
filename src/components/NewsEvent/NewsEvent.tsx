/* eslint-disable @typescript-eslint/no-explicit-any */

import Loading from '../Loading/Loading';
import NewsEventInformation from './NewsEventInformation';
import { toast } from 'react-hot-toast';
import { useGetNewsEventQuery } from '../../redux/newEvent/newEventApi';

export default function NewsEvent({ id }: any) {
  const { data, error, isLoading } = useGetNewsEventQuery(id);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return toast("Something Error happened");
  }
  const events = data.data;
  return (
    <section className="border mt-6">
      <h1 className="border text-2xl p-4 bg-[#F8F8FF] border-b border-[#2073BD] text-[#2073BD]">
        <span className=" font-semibold border-b border-[#2073BD] text-[#2073BD]">
          News Event ( {events.length} )
        </span>
      </h1>
      <div className=" felx justify-between items-center">
        <div>
          {events.map((event: any) => (
            <NewsEventInformation key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
