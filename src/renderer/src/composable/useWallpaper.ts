import { useConfigStore } from '@renderer/store/useConfigStore'

export default () => {
  const { config } = useConfigStore()
  const setWallpaper = () => {
    window.api.setWallpaper(config.url)
  }
  const downloadImage = () => {
    window.api.downloadImage(config.url)
  }
  //设置图片壁纸保存目录
  const setImageSaveDirectory = () => {
    window.api.setImageSaveDirectory(config.saveDirectory)
  }
  return { setWallpaper, downloadImage, setImageSaveDirectory }
}
