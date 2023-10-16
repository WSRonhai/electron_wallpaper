import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  //设置壁纸
  setWallpaper: (url: string, path: string) => {
    ipcRenderer.send('setWallpaper', url, path)
  },
  //下载壁纸
  downloadImage: (url: string) => {
    ipcRenderer.send('downloadImage', url)
  },
  //设置图片保存目录
  setImageDirectory: async (path: string) => {
    return ipcRenderer.invoke('setImageDirectory', path)
  },
  //检测保存目录是否存在
  checkDirectory: async (path: string) => {
    return ipcRenderer.invoke('checkDirectory', path)
  },
  //跳转默认浏览器
  openExternalLink: (url: string) => {
    console.log(222, url)
    ipcRenderer.send('openExternalLink', url)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
