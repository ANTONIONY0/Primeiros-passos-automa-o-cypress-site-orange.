import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM test', () => {

     
   it('login - fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginwithUser(userData.userFail.username,userData.userFail.password)
  loginPage.checkAccessInvalid()
  })

it('login - sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginwithUser(userData.usersucess.username,userData.usersucess.password)
  dashboardPage.checkDashboardPage()
  })


})