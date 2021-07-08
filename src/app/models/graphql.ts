import DataTable from './data-table';

interface GraphQLResponse<T> {
  data: T;
}
export interface DataTableResponse {
  dataTables: DataTable[];
}
export interface CellsResponse {
  dataTable: DataTable;
}

export default GraphQLResponse;

