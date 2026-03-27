class loginpage{
    constructor(page){
        this.usernameTextfield=page.locator("input#username")
        this.passwordTextfield=page.locator("input#password")
        this.submitButton=page.getByRole("button")


    }
}
export default loginpage