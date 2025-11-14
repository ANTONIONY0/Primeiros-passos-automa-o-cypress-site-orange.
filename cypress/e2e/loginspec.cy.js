import userData from '../fixtures/users/user-data.json'

describe('orange HRM test', () => {
  const selectorlist ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    SectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentiaAlert: "[role='alert']"
  }
  
  it('login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.SectionTitleTopBar).contains('Dashboard')
  })
   it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorlist.usernameField).type('Test')
  cy.get(selectorlist.passwordField).type('Test')
  cy.get(selectorlist.loginButton).click()
  cy.get(selectorlist.wrongCredentiaAlert)
  })
})
