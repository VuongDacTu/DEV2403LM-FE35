console.log("Mảng trong javascript");
// khai báo 
var arr = new Array();
console.log(arr);
arr = [];
console.log(arr);
//gán giá trị cho phần tử trong mảng
arr[0] = 100;
arr[1] = "Tú"
arr[5]=45;
console.log(arr);
for(let i in arr){
    console.log(arr[i]);
}
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}
arr = []
for(let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * 89 + 10);
}
console.log(arr);
// một số hàm thường dùng
arr = [1,4,6,3,7]
console.log(arr);
// thêm phần tử vào  cuối mảng
arr.push(100);
console.log(arr);
// thêm vào đầu mảng
arr.unshift(200);
console.log(arr);
// sắp xếp

arr.sort((x,y) => y-x)
console.log(arr);
var temp = arr.slice(1,4)
console.log(temp,"\t",arr);
arr.splice(1,3);
console.log(arr);
temp = arr.filter(x => x>50)
console.log(temp);