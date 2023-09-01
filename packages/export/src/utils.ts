import {
  VxeTablePropTypes,
  SaveFileFunction,
  ReadFileFunction,
  VxeTableConstructor,
} from '../../../types/all';
import { VXETable } from '../../v-x-e-table';
import XEUtils from 'xe-utils';
import { parseFile } from '../../tools/utils';
import GlobalConfig from '../../v-x-e-table/src/conf';
import { errLog, getLog } from '../../tools/log';

export function getExportBlobByContent(content: string, options: { type: string }) {
  return new Blob([content], { type: `text/${options.type};charset=utf-8;` });
}

// 导入
let fileForm: any;
let fileInput: any;

/**
 * 读取本地文件
 * @param {*} options 参数
 */

export const readLocalFile: ReadFileFunction = options => {
  if (!fileForm) {
    fileForm = document.createElement('form');
    fileInput = document.createElement('input');
    fileForm.className = 'vxe-table--file-form';
    fileInput.name = 'file';
    fileInput.type = 'file';
    fileForm.appendChild(fileInput);
    document.body.appendChild(fileForm);
  }

  return new Promise((resolve, reject) => {
    const types = options?.types || [];
    const isAllType = !types.length || types.some((type: any) => type === '*');
    fileInput.multiple = !!options?.multiple;
    fileInput.accept = isAllType ? '' : `.${types.join(', .')}`;
    fileInput.onchange = (evnt: any) => {
      const { files } = evnt.target;
      const file = files[0];
      let errType = '';
      // 校验类型
      if (!isAllType) {
        for (let fIndex = 0; fIndex < files.length; fIndex++) {
          const { type } = parseFile(files[fIndex]);
          if (!XEUtils.includes(types, type)) {
            errType = type;
            break;
          }
        }
      }
      if (!errType) {
        resolve({ status: true, files, file });
      } else {
        if (options?.message !== false) {
          // 检测弹窗模块
          if (GlobalConfig.VUE_APP_VXE_TABLE_ENV === 'development') {
            if (!VXETable.modal) {
              errLog('vxe.error.reqModule', ['Modal']);
            }
          }
          VXETable.modal.message({
            content: GlobalConfig.i18n('vxe.error.notType', [errType]),
            status: 'error',
          });
        }
        const params = { status: false, files, file };
        reject(params);
      }
    };
    fileForm.reset();
    fileInput.click();
  });
};

/**
 * 保存文件到本地
 * @param {*} options 参数
 */

/**
 * 保存文件到本地
 * @param {*} options 参数
 */
export const saveLocalFile: SaveFileFunction = options => {
  const { filename, type, content } = options;
  const name = `${filename}.${type}`;
  if (window.Blob) {
    const blob =
      content instanceof Blob
        ? content
        : getExportBlobByContent(XEUtils.toValueString(content), options);
    if ((navigator as any).msSaveBlob) {
      (navigator as any).msSaveBlob(blob, name);
    } else {
      const url = URL.createObjectURL(blob);
      const linkElem = document.createElement('a');
      linkElem.target = '_blank';
      linkElem.download = name;
      linkElem.href = url;
      document.body.appendChild(linkElem);
      linkElem.click();
      requestAnimationFrame(() => {
        if (linkElem.parentNode) {
          linkElem.parentNode.removeChild(linkElem);
        }
        URL.revokeObjectURL(url);
      });
    }
    return Promise.resolve();
  }
  return Promise.reject(new Error(getLog('vxe.error.notExp')));
};
