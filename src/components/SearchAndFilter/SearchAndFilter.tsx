/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SearchAndFilter({
  features,
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
      <input
        type="text"
        className="input input-sm rounded  input-primary w-1/3 "
        placeholder="Search by title or name or location"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <select
        name="isAvailable"
        className="select select-sm rounded select-info w-1/3 mr-2 "
        onChange={e => selectedField(e)}
      >
        <option value="all">All Types of Care Home</option>
        {features?.map((item: any) => (
          <option key={item._id} value={item?.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
