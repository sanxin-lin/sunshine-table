import XEUtils from 'xe-utils';
import { VxeTableConstructor, VxeTablePrivateMethods, VxeTableDefines } from '../../../types/all';

export function getCellValue(row: any, column: VxeTableDefines.ColumnInfo) {
  return XEUtils.get(row, column.field);
}

export function setCellValue(row: any, column: VxeTableDefines.ColumnInfo, value: any) {
  return XEUtils.set(row, column.field, value);
}
