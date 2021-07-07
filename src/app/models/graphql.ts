import DataTable from './data-table';

interface GraphQLResponse<T> {
  data: T;
}
export interface DataTableResponse {
  dataTables: DataTable[];
}

export default GraphQLResponse;

