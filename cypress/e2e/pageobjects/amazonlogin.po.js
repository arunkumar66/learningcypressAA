class amazonlogin{

    signin(){
        return "//span[@id='nav-link-accountList-nav-line-1']"
    }
    signintext(){
        return '//input[@type="email"]'
    }
    continue(){
        return '//input[@id="continue"]'
    }
}
export default amazonlogin