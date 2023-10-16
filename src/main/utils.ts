import fetch from 'node-fetch'
import { dialog } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

export const downloadFile = async (url: string, localFile: string) => {
  // const localFile = resolve(path, url.split('/').pop()!)

  //1.下载图片 2.设置壁纸
  const streamPipeline = promisify(pipeline)

  const response = await fetch(url)

  if (!response.ok) {
    dialog.showErrorBox('隆海温馨提示', '图片下载失败')
    throw new Error(`unexpected response ${response.statusText}`)
  }

  await streamPipeline(response.body, createWriteStream(localFile))

  return localFile
}
