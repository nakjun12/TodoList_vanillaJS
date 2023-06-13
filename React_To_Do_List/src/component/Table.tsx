import DataTable from "react-data-table-component";
import dummy from "./lib/dummy";

type Movie = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};
const columns = [
  {
    id: 1,
    name: "Title",
    selector: (row: Movie) => row.title,
  },
  {
    id: 2,
    name: "Director",
    selector: (row: Movie) => row.director,
  },
  {
    id: 3,
    name: "Runtime (m)",
    selector: (row: Movie) => row.runtime,

    right: true,
  },
];

function Table() {
  return (
    <div className="App">
      <DataTable title="Movies" columns={columns} data={dummy} pagination />
    </div>
  );
}

export default Table;
