import { dialog, ipcMain } from 'electron'
import { downloadFile } from '../utils'

ipcMain.on('downloadImage', async (_event, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '下载图片',
    message: '隆海的桌面壁纸',
    defaultPath: fileName,
    properties: ['createDirectory']
  })
  if (res.canceled == false && res.filePath) downloadFile(url, res.filePath)
})
