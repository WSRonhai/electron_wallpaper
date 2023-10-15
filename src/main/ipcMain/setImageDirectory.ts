import { IpcMainInvokeEvent, dialog, ipcMain } from 'electron'

ipcMain.handle('setImageDirectory', (_event: IpcMainInvokeEvent) => {
  dialog.showOpenDialog({
    title: '选择图片保存目录',
    properties: ['createDirectory', 'openDirectory']
  })
})
