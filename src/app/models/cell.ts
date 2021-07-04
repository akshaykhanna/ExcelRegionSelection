export enum CellStatus {
  NORMAL,
  MARKED,
  SELECTED,
}

class Cell {
  id: string;
  value: string;
  rowNo?: number;
  colStr?: string;
  status: CellStatus;
  constructor(
    colStr: string,
    rowNo: number,
    value: string,
    cellStatus = CellStatus.NORMAL
  ) {
    this.id = this.getId(colStr, rowNo);
    this.value = value;
    this.colStr = colStr;
    this.rowNo = rowNo;
    this.status = cellStatus;
  }
  private getId(colStr: string, rowNo: number) {
    return `${colStr}${rowNo}`;
  }
}

export default Cell;