interface DataTable {
  id?: string;
  title?: string;
  versions?: DataTableVersion[];
}
export interface DataTableVersion {
  versionNumber: number;
  data: Data;
}

export interface Data {
  rows?: Row[];
}

export interface Row {
  columnData: [];
}
export default DataTable;
