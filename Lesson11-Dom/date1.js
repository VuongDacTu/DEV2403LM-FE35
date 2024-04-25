var date = new Date();
console.log(date);
var dd = date.getDate();
console.log(dd);
var mm = date.getMonth() +1;
console.log(mm);
var yy = date.getFullYear();
console.log(yy)
var hh = date.getHours();
console.log(hh);
var mn = date.getMinutes();
console.log(mn);
var sc = date.getSeconds();
console.log(sc);
str= "Hôm nay là ngày "+dd+"/"+mm+"/"+yy;
console.log(str);
time = "Bây giờ là "+hh+":"+mn+":"+sc;
console.log(time);
function thoigian(){
    var date = new Date();
console.log(date);
var dd = date.getDate();
console.log(dd);
var mm = date.getMonth() +1;
console.log(mm);
var yy = date.getFullYear();
console.log(yy)
var hh = date.getHours();
console.log(hh);
var mn = date.getMinutes();
console.log(mn);
var sc = date.getSeconds();
console.log(sc);
str= "Hôm nay là ngày "+dd+"/"+mm+"/"+yy;
document.write(str);
time = "Bây giờ là "+hh+":"+mn+":"+sc;
document.write(time);
}
setInterval(thoigian,1000)