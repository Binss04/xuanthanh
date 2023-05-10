// Điểm giống nhau

// Đều dùng để khai báo biến
// let hoTen = "Tạ Văn Định";
// let namSinh = 2004;
// let diem = 5.5;
// console.log(hoTen);
// console.log(namSinh);
// console.log(diem);

// var,let đều có thể gán lại đc giá trị
// const thì ko thể gán lại đc giá trị
// var a = 2004;
// a = "Nguyễn Văn A";
// console.log(a);

// let b = "Tạ Văn Định";
// b = 123456;
// console.log(b);

// const c = "Công nghệ thông tin";
// c = "WE18314"
// console.log(c);

// var, let ko cần giá trị khởi tạo
// const phải có giá trị khởi tạo
// var nganhHoc;
// let monHoc;
// const lop;
// console.log(nganhHoc);
// console.log(monHoc);
// console.log(lop);

// Điểm khác nhau
// var có thể khai báo lại với biến cùng tên
// var a = 3;
// var a = 2023;
// console.log(a);
// let không thể khai báo lại với biến cùng tên
// let b = "abc";
// let b = 123;
// console.log(b);

// var có thể truy cập bên ngoài scope
// if (1 < 2) {
//     var hoTen = "Tạ Văn Định";
// }
// console.log(hoTen);
// let ko thể truy cập ở bên ngoài scope
// if (1 < 2) {
//     let monHoc = "Javascript";
//     if (2 < 3) {
//         let monHoc = "CSDL";
//     }
//     console.log(monHoc);
// }

// Nhập vào tên, năm sinh, giới tính ( nam là 0, nữ là 1 )
// Kiểm tra xem người đó có đủ tuổi đi NVQS hay không
// Ông/Bà có/không đủ tuổi đi NVQS
// Ông/Bà lấy ở 0/1
// tuoi = năm hiện tại - năm sinh;
// get current year in javascript
// >= 18 và <= 27 đủ tuổi đi nvqs

// let hoTen = prompt("Nhập vào tên :");
// let namSinh = Number(prompt("Nhập vào năm sinh:"));
// let gioiTinh = Number(prompt("Nhập vào giới tính ( nam là 0, nữ là 1 )"));
// let namNay = new Date().getFullYear();
// let tuoi = namNay - namSinh;
// cách 1: sử dụng if - else if
// if (gioiTinh == 0 && tuoi >= 18 && tuoi <= 27) {
//     console.log(`Ông ${hoTen} đủ tuổi đi NVQS`);
// } else if (gioiTinh == 1 && tuoi >= 18 && tuoi <= 27) {
//     console.log(`Bà ${hoTen} đủ tuổi đi NVQS`);
// } else if (gioiTinh == 0 && tuoi < 18 || tuoi > 27) {
//     console.log(`Ông ${hoTen} không đủ tuổi đi NVQS`);
// } else {
//     console.log(`Bà ${hoTen} không đủ tuổi đi NVQS`);
// }
// toán tử 3 ngôi
// let checkGioiTinh = gioiTinh == 0 ? "Ông" : "Bà";
// let checkTuoi = tuoi >= 18 && tuoi <= 27 ? "đủ" : "chưa đủ";

// console.log(`${checkGioiTinh} ${hoTen} ${checkTuoi} tuổi đi NVQS`);

// Các kiểu dữ liệu trong js
// String type
let nameGV = "   Tạ Văn Định    ";
console.log(nameGV.length); // Đếm tổng sô ký tự trong chuỗi
console.log(nameGV.substring(0, 2)); // Cắt chuỗi từ vị trí x đến vị trí y

console.log(`'${nameGV}'`);
console.log(`'${nameGV.trim()}'`); // Bỏ khoảng trắng thừa ở đầu và cuối
console.log(`'${nameGV.trimStart()}'`); // Bỏ khoảng trắng thừa ở đầu chuỗi
console.log(`'${nameGV.trimEnd()}'`); // Bỏ khoảng trắng thừa ở cuối chuỗi

let chucVu = "Giảng viên";
let lopHoc = "WE18314";
console.log(chucVu.concat(" ", lopHoc)); // Nối chuỗi
console.log(chucVu.toUpperCase()); // Viết hoa tất cả các ký tự trong chuỗi
console.log(chucVu.toLowerCase()); // Viết thường tất cả các ký tự trong chuỗi

// Number type
let so1 = 5;
let so2 = 3.56789;

console.log(isNaN(so1)); // Nếu là kiểu number thì nó trả về là false
console.log(Number.isInteger(so2)); // Nếu là số nguyên thì nó trả về là true
console.log(so2.toFixed(3)); // làm tròn đến phần tử x đếm từ sau dấu .
console.log(so2.toPrecision()); // Làm tròn đến phần tử x đếm từ phần nguyên

// bigint type
let isBigInt = 987654321n;
console.log(typeof isBigInt);

// Boolean type
let isTrue = true;
let isFalse = false;

// Undefined type
let nganhHoc;
console.log(nganhHoc);

// Null type
let isNull = null;
console.log(isNull);