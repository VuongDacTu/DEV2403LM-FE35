// khởi tạo đối tượng trong javascript
// khởi tạo:
var emp = {
    // các thuộc tính của đối tượng
    fullName:'',
    email:'',
    address:'',

    // các phương thức của đối tượng
    addInfor:function(){
        this.fullName = "Đắc Tú";
        this.email = "dactu3@gmail.com";
        this.address ="Quốc Oai, Hà Nội";

    },
    display:function(){
        console.log(this.fullName,this.email,this.address);
    }

}
// sử dụng đối tượng
emp.display()
emp.addInfor(); // gọi thực hiện phương thức
emp.display()
//
var student = new Object();
student.name = "Nguyễn Văn A";
student.age = 22;
student.display = function(name, age) {
    console.log(name,age);
}
student.display(student.name,student.age )