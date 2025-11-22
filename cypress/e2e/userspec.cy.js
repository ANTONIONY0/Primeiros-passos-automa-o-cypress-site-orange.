import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('orange HRM test', () => {

  const selectorsList ={
    
  }
  
  it.only('user info update Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.usersucess.username,userData.usersucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('firstName','middleName','lastName')
    myInfoPage.fillEmployeeDetails('EmployeeId','OtherId','10test','2025-29-11')
    myInfoPage.fillstatus()
    myInfoPage.saveforme()
    
     
  })
   it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type('Test')
  cy.get(selectorsList.passwordField).type('Test')
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentiaAlert)
  })
})
