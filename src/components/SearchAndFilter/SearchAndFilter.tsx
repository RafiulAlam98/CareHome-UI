/* eslint-disable @typescript-eslint/no-explicit-any */
const careTypes = [
  {
    id: 1,
    name: 'Nursing',
  },
  {
    id: 2,
    name: 'Residential',
  },
  {
    id: 3,
    name: 'Elderly',
  },
  {
    id: 4,
    name: 'Learning Disability',
  },
  {
    id: 5,
    name: 'Dementia',
  },
  {
    id: 6,
    name: 'Short Term/Respite',
  },
  {
    id: 7,
    name: 'Physical Disability',
  },
  {
    id: 8,
    name: 'Palliative Care',
  },
  {
    id: 9,
    name: 'Mental Health',
  },
  {
    id: 10,
    name: 'Detention under Mental Health Act',
  },
  {
    id: 11,
    name: 'Younger Adults',
  },
  {
    id: 12,
    name: 'Sensory Impairment',
  },
  {
    id: 13,
    name: 'Eating Disorder',
  },
  {
    id: 14,
    name: 'Substance Misuse',
  },
];
export default function SearchAndFilter({
  filterableData,
  searchText,
  setSearchText,
}: any) {
  const selectedField = (event: any) => {
    console.log(event.target.value);
    filterableData(event.target.value);
  };
  return (
    <div className="p-2 text-center">
      <select
        name="isAvailable"
        className="select select-sm rounded select-info w-1/3 mr-2 "
        onChange={e => selectedField(e)}
      >
        <option value="all">All Types of Care Home</option>
        {careTypes?.map((item: any) => (
          <option key={item.id} value={item?.name}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="input input-sm rounded  input-primary w-1/3 mr-2 mt-5"
        placeholder="Search by title or name or location"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  );
}
