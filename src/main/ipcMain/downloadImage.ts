import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { downloadFile } from '../utils'

ipcMain.on('downloadImage', async (_event: IpcMainEvent, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '保存壁纸',
    message: '喜荣桌面壁纸',
    defaultPath: fileName,
    properties: ['createDirectory']
  })
  if (res.canceled == false && res.filePath) downloadFile(url, res.filePath)
})
