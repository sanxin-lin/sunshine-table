import XEUtils from 'xe-utils';

const reClsMap: { [key: string]: any } = {};

export const browse = XEUtils.browse();

function getClsRE(cls: any) {
  if (!reClsMap[cls]) {
    reClsMap[cls] = new RegExp(`(?:^|\\s)${cls}(?!\\S)`, 'g');
  }
  return reClsMap[cls];
}

export function hasClass(elem: any, cls: any) {
  return elem && elem.className && elem.className.match && elem.className.match(getClsRE(cls));
}

export function getDomNode() {
  const documentElement = document.documentElement;
  const bodyElem = document.body;
  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth,
  };
}

export function getAbsolutePos(elem: any) {
  const bounding = elem.getBoundingClientRect();
  const boundingTop = bounding.top;
  const boundingLeft = bounding.left;
  const { scrollTop, scrollLeft, visibleHeight, visibleWidth } = getDomNode();
  return {
    boundingTop,
    top: scrollTop + boundingTop,
    boundingLeft,
    left: scrollLeft + boundingLeft,
    visibleHeight,
    visibleWidth,
  };
}

/**
 * 检查触发源是否属于目标节点
 */
export function getEventTargetNode(
  evnt: any,
  container: any,
  queryCls?: string,
  queryMethod?: (target: Element) => boolean
) {
  let targetElem;
  let target =
    evnt.target.shadowRoot && evnt.composed ? evnt.composedPath()[0] || evnt.target : evnt.target;
  while (target && target.nodeType && target !== document) {
    if (queryCls && hasClass(target, queryCls) && (!queryMethod || queryMethod(target))) {
      targetElem = target;
    } else if (target === container) {
      return { flag: queryCls ? !!targetElem : true, container, targetElem: targetElem };
    }
    target = target.parentNode;
  }
  return { flag: false };
}

const scrollIntoViewIfNeeded = 'scrollIntoViewIfNeeded'
const scrollIntoView = 'scrollIntoView'

export function scrollToView (elem: any) {
  if (elem) {
    if (elem[scrollIntoViewIfNeeded]) {
      elem[scrollIntoViewIfNeeded]()
    } else if (elem[scrollIntoView]) {
      elem[scrollIntoView]()
    }
  }
}