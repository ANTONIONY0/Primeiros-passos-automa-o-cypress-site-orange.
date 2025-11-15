import userData from '../fixtures/users/user-data.json'

describe('orange HRM test', () => {
  const selectorsList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    SectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentiaAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstnamefield:"[name='firstName']",
    middlenamefield:"[name='middleName']",
    lastnamefield:"[name='lastName']",
    genericfield:".oxd-input--active",
    datefield:"[placeholder='yyyy-dd-mm']",
    genericcombobox:".oxd-select-text-input",
    seconditemcombobox:".oxd-select-dropdown > :nth-child(2)",
    thirditemcombobox:".oxd-select-dropdown > :nth-child(3)",
    dateclosebutton:".--close",
    submitbutton:"[type='submit']",

    
  }
  
  it.only('user info update sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstnamefield).clear().type('tonytest')
    cy.get(selectorsList.middlenamefield).clear().type('antonoionytest')
    cy.get(selectorsList.lastnamefield).clear().type('almeidatest')
    cy.get(selectorsList.genericfield).eq(3).clear().type('Empdtest')
    cy.get(selectorsList.genericfield).eq(4).clear().type('OtherIdtest')
    cy.get(selectorsList.genericfield).eq(5).clear().type('10test')
    cy.get(selectorsList.genericfield).eq(6).clear().type('2025-11-29')
    cy.get(selectorsList.dateclosebutton).click()
    cy.get(selectorsList.submitbutton).eq(0).click({force:true})
    cy.get('.oxd-toast-close')


    
    cy.get(selectorsList.genericcombobox).eq(0).click()
    cy.get(selectorsList.seconditemcombobox).click()
    cy.get(selectorsList.genericcombobox).eq(1).click()
    cy.get(selectorsList.thirditemcombobox).click()
    
    
   
  })
   it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type('Test')
  cy.get(selectorsList.passwordField).type('Test')
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentiaAlert)
  })
})
