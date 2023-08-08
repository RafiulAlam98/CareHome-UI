/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SearchAndFilter({
  setSelectedGenre,
  setSearchText,
  searchText,
  selectedGenre,
}: any) {
  return (
    <div className="p-2 text-center">
      <select
        className="select select-sm rounded select-info w-1/3 mr-2 "
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="location">Location</option>
        <option value="title">Name</option>
      </select>
      <input
        type="text"
        className="input input-sm rounded  input-primary w-1/3 "
        placeholder="Search by title or name or location"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
