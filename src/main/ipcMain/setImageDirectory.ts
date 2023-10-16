import { IpcMainInvokeEvent, dialog, ipcMain } from 'electron'

ipcMain.handle('setImageDirectory', async (_event: IpcMainInvokeEvent) => {
  const path = await dialog.showOpenDialog({
    title: '选择图片保存目录',
    properties: ['createDirectory', 'openDirectory']
  })
  if (!path.canceled && path.filePaths) return path.filePaths[0]
  return undefined
})
