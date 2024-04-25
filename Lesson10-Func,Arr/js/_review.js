// Review
/*
    Cấu trúc lựa chọn rẽ nhánh:
    - if: 4 dạng if
        * if đơn: 
            if(condition){
                statement block;
            }
        * if đầy dủ: 
            if(expression_condition){
                statement block (true);
            }else{
                statement block (false);
            }
        * if bậc thang:
            if(expression_codition_1){
                statement block_1 ;
            }else if(expression_codition_2){
                statement block_2 ;
            }....
            }else{
                statement block_n ;
            }
        * if lồng nhau:
            if(expression_codition_1){
                if(...){
                    ...
                }
            }else{
                if(...){
                    ...
                }else{
                    ...
                }
            }
    - switch: 
            switch(expresstion){
                case const_1: 
                    Statement block_1;
                    break;
                 case const_2: 
                    Statement block_2;
                    break;
                ....
                default:
                    Statement block_n;
            }
*/
// đếm số ngày trong tháng, năm
thang=4;nam=2024
soNgay =0;
switch(thang){
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        soNgay = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        soNgay = 30;
        break;
    case 2:
        if(nam % 4 ==0 && nam % 100 !=0){
            soNgay=29;
        }else{
            soNgay=28;
        }
        break;
    default:
        console.log("Bạn nhập sai tháng năm");
}
if(soNgay>0){
    console.log("Tháng",thang,"năm",nam,"có",soNgay,"ngày");
}
