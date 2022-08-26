class textboxpage{
    username2(){
        return '//input[@class=" mr-sm-2 form-control"]'
    }
    email2(){
        return '//input[@id="userEmail"]'
    }
    currentaddress(){
        return '//textarea[@id="currentAddress"]'
    }
    permenantaddress(){
        return '//textarea[@id="permanentAddress"]'
    }
    submitbtn(){
        return '//button[@id="submit"]'
    }
}
export default textboxpage