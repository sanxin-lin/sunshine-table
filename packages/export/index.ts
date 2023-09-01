import { App } from 'vue'
import { saveLocalFile as saveFile, readLocalFile as readFile } from './src/utils';
import { VXETable } from '../v-x-e-table'

export { saveFile, readFile }

export const VxeModuleExport = {
  // ExportPanel: ExportPanelComponent,
  // ImportPanel: ImportPanelComponent,
  install (app: App) {
    VXETable.saveFile = saveFile
    VXETable.readFile = readFile
    VXETable.print = print
    // VXETable.setup({
    //   export: {
    //     types: {
    //       csv: 0,
    //       html: 0,
    //       xml: 0,
    //       txt: 0
    //     }
    //   }
    // })
    // VXETable.hooks.add('$tableExport', exportHook)
    // app.component(ExportPanelComponent.name, ExportPanelComponent)
    // app.component(ImportPanelComponent.name, ImportPanelComponent)
  }
}

export const Export = VxeModuleExport