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
