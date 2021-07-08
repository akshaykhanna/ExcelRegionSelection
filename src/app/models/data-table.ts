interface DataTable {
  id?: string;
  title?: string;
  versions?: DataTableVersion[];
}
export interface DataTableWithVersion {
  id?: string;
  title?: string;
  versionNo: number;
}
export interface DataTableVersion {
  versionNumber: number;
  data: Data;
}

export interface Data {
  rows?: Row[];
}

export interface Row {
  columnData: number[];
}
export default DataTable;
