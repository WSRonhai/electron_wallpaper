import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

const http = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000' : 'https://www.pythl.com/api',
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

http.interceptors.request.use(
  function (config) {
    ElLoading.service({ fullscreen: true })
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage.warning(error)
    return Promise.reject(error)
  }
)

export default http
