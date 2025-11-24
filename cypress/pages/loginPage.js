class LoginPage {
     selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentiaAlert: "[role='alert']",
        }
        
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginwithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentiaAlert)
    }
    
}

export default LoginPage