// các cấu trúc điều khiển: 3 loại
// - lựa chọn / rẽ nhánh: if / switch
// - lặp: for, do...while, while,foreach(for...in)
// - lệnh nhảy: return, break, continue,...
// ===============================================
// ================== 1.Cấu trúc lựa chọn rẽ nhánh
// 1.1: if => 4 dạng if khác nhau
// Dạng 1: if đơn
a = 10
if(a>5){
    console.log(a,">",5)
}
if(a>15){
    console.log(a,">",15)
}
// Dạng 2: if đầy đủ
// Kiểm tra nếu a>0 thì in ra màn hình a là số dương
// Ngược lại: số a là số âm
if(a>0){
    console.log(a,"là số dương")
}
else{
    console.log(a,"là số âm")
}
a=100
if(a%2==0){
    console.log(a,"là số chẵn")
}else{
    console.log(a,"là số lẻ")
}
// Dạng 3: if bậc thang
a = 0
if(a>0){
    console.log(a,"là số dương")
}
else if(a < 0){
    console.log(a,"là số âm")
}
else{
    console.log("số 0")
}
// Dạng 4: if lồng nhau
a = 10
b = 20
if(a >0){
    if(b%2==0 && b != 0){
        c = a/b
    }else{
        c = a*b
    }
}
console.log(c)
// Bài toán: Giải phương trình bậc nhất
a = 2; b = 0
if(a ==0){
    if(b !=0){
        console.log("phương trình",a+"x","+",b,"vô nghiệm")
        
    }else
    console.log("phương trình",a+"x","+",b,"đúng với mọi x")
}else{
    console.log("phương trình",a+"x","+",b,"có nghiệm là",-b/a)
}
// 1.2 switch case
chon = 7
switch (chon) {
    case 1: console.log("Chủ nhật")
    break;
    case 2: console.log("Thứ hai")
    break;
    case 3: console.log("Thứ ba")
    break;
    case 4: console.log("Thứ tư")
    break;
    case 5: console.log("Thứ năm")
    break;
    case 6: console.log("Thứ sáu")
    break;
    case 7: console.log("Thứ bảy")
    break;
    default: 
    console.log("Bạn đã nhập sai")
}