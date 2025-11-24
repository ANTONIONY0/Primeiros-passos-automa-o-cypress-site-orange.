class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors
    }
    fillPersonalDetails(firstName,middleName,lastName) {
        cy.get(this.selectorsList().firstnamefield).clear({force:true}).type(firstName)
        cy.get(this.selectorsList().middlenamefield).clear().type(middleName)
        cy.get(this.selectorsList().lastnamefield).clear().type(lastName)
    }
    
    fillEmployeeDetails(EmployeeId,OtherId,DriversLicense,LicenseExpiryDate) {
        cy.get(this.selectorsList().genericfield).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericfield).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericfield).eq(5).clear().type(DriversLicense)
        cy.get(this.selectorsList().genericfield).eq(6).clear().type(LicenseExpiryDate)
        cy.get(this.selectorsList().dateclosebutton).click()
    }

    saveforme() {
         cy.get(this.selectorsList().submitbutton).eq(0).click({force:true})
         cy.get('.oxd-toast-close')
 
    }

    fillstatus() {
        cy.get(this.selectorsList().genericcombobox).eq(0).click()
        cy.get(this.selectorsList().seconditemcombobox).click()
        cy.get(this.selectorsList().genericcombobox).eq(1).click()
        cy.get(this.selectorsList().thirditemcombobox).click()
    }

   
    
}

export default MyInfoPage