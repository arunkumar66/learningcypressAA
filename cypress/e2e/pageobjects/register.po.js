class registerpage{

    fullname(){
        return "//td[text()='Full Name']/../td[3]/input"
    }
    redifmailID(){
        return "tr:nth-child(7) > td:nth-child(3) > input[type=text]:nth-child(1)"
    }
    checkbutton(){
        return "input[name='btnchkavail3f6c3594']"
    }
    errormessage(){
        return "*[@id='check_availability']/font/b"
    }
    password(){
        return "input[type='password']"
    }
    retypepassword(){
        return "input[name='passwd3f6c3594']"
    }
    alternativeemail(){
        return "//input[@name='altemailffb67be4']"
    }
    checkboxalteremail(){
        return "//input[@type='checkbox']"
    }
    dropdownhintq(){
        return "td[text()='Select a Security Question']/../td[3]/select"
    }
    hintanswer(){
        return "input[name='hinta3f6c3594']"
    }
    mothername(){
        return "input[name='mothername3f6c3594']"
    }
    dropdownmobilenum(){
        return '//div[@id="country_id"]'
    }
    mobilenum(){
        return "input[name='mobno3f6c3594']"
    }
    day(){
        return "//select[@name= 'DOB_Dayffb67be4']"
    }
    month(){
        return "select[name='DOB_Month3f6c3594']"
    }
    year(){
        return "select[name='DOB_Year3f6c3594']"
    }
    country(){
        return "select[name='country3f6c3594']"
    }
    city(){
        return "select[name='city3f6c3594']"
    }
}
export default registerpage 