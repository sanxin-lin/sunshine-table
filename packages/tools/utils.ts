import XEUtils from 'xe-utils';
import DomZIndex from 'dom-zindex';
import GlobalConfig from '../v-x-e-table/src/conf';

export function getFuncText(content?: string | number | boolean | null) {
  return content
    ? XEUtils.toValueString(GlobalConfig.translate ? GlobalConfig.translate('' + content) : content)
    : '';
}

export function nextZIndex() {
  return DomZIndex.getNext();
}

export function getLastZIndex() {
  return DomZIndex.getCurrent();
}


export function parseFile (file: File) {
  const name = file.name
  const tIndex = XEUtils.lastIndexOf(name, '.')
  const type = name.substring(tIndex + 1, name.length).toLowerCase()
  const filename = name.substring(0, tIndex)
  return { filename, type }
}

export function isEnableConf (conf: any): boolean {
  return conf && conf.enabled !== false
}

/**
 * 判断值为：'' | null | undefined 时都属于空值
 */
export function eqEmptyValue (cellValue: any) {
  return cellValue === '' || XEUtils.eqNull(cellValue)
}

export function isEmptyValue (cellValue: any) {
  return cellValue === null || cellValue === undefined || cellValue === ''
}

export function formatText (value: any, placeholder?: any) {
  return '' + (isEmptyValue(value) ? (placeholder ? GlobalConfig.emptyCell : '') : value)
}