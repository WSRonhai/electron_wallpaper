import { ipcMain, shell, IpcMainEvent } from 'electron'

ipcMain.on('openExternalLink', (_event: IpcMainEvent, url: string) => {
  shell.openExternal(url)
})
