// Cấu trúc lặp for
// Cú pháp:
/* 
    for(init;expression_codition;step){
        statement block;
    }
*/

for(let i = 1; i <= 5; i++){
    console.log(i);
}
// Các dạng for
// for khuyết - init
console.log("for khuyết -init");
i = 1
for(;i<=5;i++){
    console.log(i);
}
// for khuyết -codition
console.log("for khuyết -codition");
for(let i = 1;;i++){
    if(i>5) break;
    console.log(i);
}
// for khuyết -step
console.log("for khuyết -step");
for(let i = 1;i<=5;){
    console.log(i);
    i++
}
// for khuyết toàn bộ
i =1
console.log("for khuyết toàn bộ");
for(;;){
    if(i>5) break;
    console.log(i);
    i++
}
// for không thân
console.log("for không thân");
for(i = 1; i<=5;console.log(i),i++){}
// Bài tập
n = 200;
console.log("Các số nguyên dương chẵn <",n);
for(i = 2;i<n;i+=2){  
        console.log(i); 
}
console.log("Các số nguyên tố <",n);
for(i = 2; i < n;i++){
    dem = 0
    for(j = 2 ; j <= Math.sqrt(i); j++){
        if(i%j==0){
            dem++;
        }
    }
    if(dem == 0){
        console.log(i);
    }
}
