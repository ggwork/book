import axios from "axios"
import {
  Message
} from "element-ui"

//  这个baseUrl要根据实际情况进行改变
axios.defaults.baseURL = "/"
axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=UTF-8"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

// 请求拦截器 添加token
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5000,
    })
    return Promise.resolve(error)
  }
)

export default {
  // get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
          method: "get",
          url,
          params: param,
        })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          Message({
            message: error,
            type: "error",
            duration: 5000,
          })
          reject(error)
        })
    })
  },
  // post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
          method: "post",
          url,
          data: param,
        })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          Message({
            message: error,
            type: "error",
            duration: 5000,
          })
          reject(error)
        })
    })
  },
  // all get
  allGet(fnArr) {
    return axios.all(fnArr)
  },
}