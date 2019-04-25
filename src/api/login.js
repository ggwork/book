import service from './config'
class Login {
  submit(params) {
    return service.post('/login', params)
  }
}
export default new Login()