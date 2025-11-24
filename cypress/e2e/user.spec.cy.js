import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('orange HRM test', () => {

  
  it('user info update Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.usersucess.username,userData.usersucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(),chance.string(),chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId','OtherId','10test','2025-29-11')
    myInfoPage.fillstatus()
    myInfoPage.saveforme()
  })

})
