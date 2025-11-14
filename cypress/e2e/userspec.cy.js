import userData from '../fixtures/users/user-data.json'

describe('orange HRM test', () => {
  const selectorlist ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    SectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:"orangehrm-dashboard-grid",
    wrongCredentiaAlert: "[role='alert']"
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
  }
  
  it.only('user info update sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.dashboardGrid)
    cy.get(selectorlist.myInfoButton).click()
  })
   it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorlist.usernameField).type('Test')
  cy.get(selectorlist.passwordField).type('Test')
  cy.get(selectorlist.loginButton).click()
  cy.get(selectorlist.wrongCredentiaAlert)
  })
})
