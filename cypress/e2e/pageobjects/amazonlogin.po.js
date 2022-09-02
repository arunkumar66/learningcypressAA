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
    passwordtext(){
        return '//input[@id="ap_password"]'
    }
    signinbtn(){
        return '//input[@id="signInSubmit"]'
    }
    searchbtn(){
        return '#twotabsearchtextbox'
    }
    thirdelement(){
        return '//div[@class="s-suggestion-container"]/../../div[3]'
    }
    results(){
        return'//span[@class="a-size-medium a-color-base a-text-normal"][1]'
    }
    addtocart(){
        return '//span[@id="submit.add-to-cart"]'
    }
    proceedtopay(){
        return '//input[@name="proceedToRetailCheckout"]'
    }
    countrydropdown(){
        return '//div[@class="a-section a-spacing-base adddress-ui-widgets-form-field-container"][1]'
    }
    fullname(){
        return '//input[@type="text"][1]'
    }
    mobilenumber(){
        return '//input[@type="text"][2]'
    }
    pincode(){
        return '//input[@type="text"][3]'
    }
    flat(){
        return '//input[@type="text"][4]'
    }
    area(){
        return '//input[@type="text"][5]'
    }
    landmark(){
        return '//input[@type="text"][6]'
    }
    city(){
        return '//input[@type="text"][7]'
    }
    statedropdown(){
        return '//div[@class="a-section a-spacing-base adddress-ui-widgets-form-field-container"][6]'
    }
    defaultaddress(){
        return 'input[type="checkbox"]'
    }
    addresstypedropdown(){
        return '//div[@class="a-section a-spacing-base adddress-ui-widgets-form-field-container address-ui-widgets-desktop-form-field"]'
    }
    useaddress(){
        return '//input[@class="a-button-input"][3]'
    }
}
export default amazonlogin