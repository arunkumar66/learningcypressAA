class loginopensource {
    username() {
        return "//label[text()='Username']/../../div[2]/input"

    }
    password() {
        return '//input[@type="password"]'
    }
    loginbtn(){
        return'//button[@type="submit"]'
    }
}
export default loginopensource