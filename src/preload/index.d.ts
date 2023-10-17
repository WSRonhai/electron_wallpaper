import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string, path: string) => void
      downloadImage: (url: string) => void
      openExternalLink: (url: string) => void
      checkDirectory: (url: string) => Promise<boolean>
      setImageDirectory: (url: string) => Promise<string>
      minimizeWindow: () => void
    }
  }
}
