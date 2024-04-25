// regular expression
var regx = /Devmaster Academy/
if(regx.test("Chào mừng bạn đến với Devmaster Academy")){
    console.log("Có chứa Devmaster Academy");
}else{
    console.log("Không có");
}
regx = /n+/
if(regx.test("Hello")){
    console.log("Có ký tự n");
}else {
    console.log("Không có n");
}

// ex3: test email
const fn_checkEmail = (email) =>{
    // quy tắc
    let regx = /^[a-z0-9]+[@][a-z0-9]{2,50}[.][a-z]{2,4}$/i
    if(regx.test(email)){
        console.log("Đúng");
    }else{
        console.log("Sai");
    }
}
fn_checkEmail("dactu.@gmail.com")