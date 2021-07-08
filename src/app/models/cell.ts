export enum CellStatus {
  NORMAL,
  MARKED,
}

class Cell {
  id: string;
  value: string;
  status: CellStatus;
  constructor(
    colStr: string,
    rowNo: number,
    value: string,
    cellStatus = CellStatus.NORMAL
  ) {
    this.id = this.getId(colStr, rowNo);
    this.value = value;
    this.status = cellStatus;
  }
  private getId(colStr: string, rowNo: number) {
    return `${colStr}${rowNo}`;
  }
}

export default Cell;
