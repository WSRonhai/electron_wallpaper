import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string) => void
      downloadImage: (url: string) => void
      openExternalLink: (url: string) => void
      setImageSaveDirectory: (url: string) => Promise<string>
  }
}
