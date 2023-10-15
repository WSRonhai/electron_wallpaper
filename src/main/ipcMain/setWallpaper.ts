import { IpcMainEvent, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../utils'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string) => {
  // const localFile = resolve(__dirname, '../../wallpaper', url.split('/').pop()!)
  // console.log(localFile)

  // //1.下载图片 2.设置壁纸
  // const streamPipeline = promisify(pipeline)

  // const response = await fetch(url)

  // if (!response.ok) {
  //   dialog.showErrorBox('隆海温馨提示', '图片下载失败')
  //   throw new Error(`unexpected response ${response.statusText}`)
  // }

  // await streamPipeline(response.body, createWriteStream(localFile))
  const localFile = await downloadFile(url)
  wallpaper.set(localFile, { screen: 'all', scale: 'auto' })
})
