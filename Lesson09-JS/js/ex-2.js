console.log("Running...")
console.log("Ngôn ngữ lập trình js")
// 1.Biến, hằng, kiểu dữ liệu
// biến, hằng: từ khoá var, let, const
const Pi = 3.1415; // khai báo hằng Pi
console.log("Pi:",Pi);
var name = "Vương Đắc Tú";
console.log("Wellcome", name);
let company = "Devmaster Academy";
console.log(company);
// 2. Toán tử, toán hạng, phép toán
// số học: *; /; +; -,%
a=100;
b=200;
c=a+b;
console.log(a+"+"+b+"="+c );
c=a*b;
console.log(a+"*"+b+"="+c )
c=a-b;
console.log(a+"-"+b+"="+c )
c=a/b;
console.log(a+"/"+b+"="+c )
c=a%b;
console.log(a+"%"+b+"="+c )
c=a++;
console.log(a,"++ =",c)
c=++b;
console.log("++",b,"=",c)
// Phép toán so sánh
a = 10
b = 15
c=a==b // false
console.log(a,"==",b,"=",c)
c=a>b // false
console.log(a,">",b,"=",c)
c=a<b // true
console.log(a,"<",b,"=",c)
c=a<=b // true
console.log(a,"<=",b,"=",c)
c=a>=b // false
console.log(a,">=",b,"=",c)
c=a===b //false
console.log(a,"===",b,"=",c)
c=a!=b // true
console.log(a,"!=",b,"=",c)
console.log(typeof(a))
console.log(typeof(b))
// toán tử logic && || !
a = 10
b= 15
c=(a>0)&& (b>15) //true && false = false
console.log(c)
c=(a>0)|| (b>15) // true || false = true
console.log(c)
c=!a
console.log(c)
//toán tử gán
a =10
a += 15// a = a + 15
console.log(a)
a = "DEV"
a+="master"
console.log(a);
a+=100
console.log(a)
a*=100
console.log(a)
// ()?:
a = 10
c = (a>5)?"Đúng":"Sai"
console.log(c)
c = (a>100)? a+10:a/2