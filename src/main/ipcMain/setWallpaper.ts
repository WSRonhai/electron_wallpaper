import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../utils'
import { resolve } from 'path'
import fs from 'fs'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  try {
    const localFile = resolve(path, url.split('/').pop()!)

    // //1.下载图片 2.设置壁纸
    // const streamPipeline = promisify(pipeline)

    // const response = await fetch(url)

    // if (!response.ok) {
    //   dialog.showErrorBox('隆海温馨提示', '图片下载失败')
    //   throw new Error(`unexpected response ${response.statusText}`)
    // }

    // await streamPipeline(response.body, createWriteStream(localFile))
    const file = await downloadFile(url, localFile)
    wallpaper.set(file, { screen: 'all', scale: 'auto' })
  } catch (error) {
    // dialog.showErrorBox('', '图片下载失败,请在设置中设置保存目录')
  }
})

ipcMain.handle('checkDirectory', async (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
