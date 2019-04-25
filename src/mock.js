import Mock from 'mockjs'

Mock.mock('/login', 'post', (options) => {
  // console.log('options:', options)
  let data = JSON.parse(options.body)
  let name = data.name
  let password = data.password
  if (name === 'admin' && password === 'admin') {
    return {
      status: 1,
      message: '登录成功'
    }
  } else {
    return {
      status: 0,
      message: '账号或者密码错误'
    }
  }
})