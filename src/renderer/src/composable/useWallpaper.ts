import router from '@renderer/router'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfigStore()
  const setWallpaper = async () => {
    const isExit = await window.api.checkDirectory(config.saveDirectory)
    if (!isExit) {
      ElMessage({ type: 'error', message: '目录无效,请检查配置' })
      return router.push({ name: 'setting' })
    }
    window.api.setWallpaper(config.url, config.saveDirectory)
  }
  const downloadImage = () => {
    window.api.downloadImage(config.url)
  }
  const openExternalLink = (url: string) => {
    window.api.openExternalLink(url)
  }
  //设置图片壁纸保存目录
  const setImageDirectory = async () => {
    const path = await window.api.setImageDirectory(config.saveDirectory)
    if (path) config.saveDirectory = path
  }
  return { setWallpaper, downloadImage, setImageDirectory, openExternalLink }
}
