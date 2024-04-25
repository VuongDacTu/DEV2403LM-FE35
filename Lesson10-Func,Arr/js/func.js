// Khái niệm hàm trong javascript
// hàm không có tham số, trả về giá trị vô hướng
function display(){
    console.log("Wellcome to function");
}
// gọi hàm, sử dụng hàm
display();
// hàm có tham số, hàm không trả về giá trị
function show(name) {
    console.log("Wellcome to,",name);
}
show("Tú")
// hàm trả về giá trị
// return
function tinh_toan() {
    return "Tính toán"
}
console.log(tinh_toan());
function tinhToan(a,b) {
    return a + b
}
console.log(tinhToan(10,200));
function tinhToan1(a,b,pheptinh) {
    let kq = 0
    switch(pheptinh){
        case "*":
            kq = a*b;
            break
        case "/":
            if(b!=0){
                kq = a/b;
            }else{
                return"Không thể thực hiện phép chia cho 0";
            }
            break;
        case "+":
            kq = a + b
            break
        case "-":
            kq = a -b;
            break
        case "%":
            kq = a%b;
            break;
        default: 
            return"Sai cú pháp"
    }
    return kq
}
console.log(tinhToan1(5,2,"*"));
console.log(tinhToan1(5,2,"/"));
console.log(tinhToan1(5,2,"+"));
console.log(tinhToan1(5,2,"-"));
console.log(tinhToan1(5,2,"%"));
console.log(tinhToan1(5,0,"/"));
console.log(tinhToan1(5,2,"%%%%%%"));

// arrow function
const fn_TinhToan =(a,b,pt)=>{
    return eval(a+pt+b)
}
console.log(fn_TinhToan(10,1,"-"));
// tham số mặc định
var fnShow = (name,age=0) =>{
    console.log(name,age)
}
fnShow();
fnShow("Tú")
fnShow("Tú",22)
fnShow = (name,age) => {
    age = age || 100;
    console.log(name,age)
}
