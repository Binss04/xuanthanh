// Khái niệm
// Các cách khai báo mảng
// Cách 1:
// let arr1 = new Array("định", 1, 2, 3);
// console.log(arr1);
// Cách 2:
// let arr2 = ["định", 1, 2, 3];
// console.log(arr2);

// Khai báo ra 1 mảng gồm 5 ptu là chuỗi ( tên nyc, cr )
let arrNYC = ["Vân", "Lam", "Hoa", "Lam", "Lam", "Lam", "Nhung", "Thanh"];
console.log(arrNYC);
// console.log(arrNYC[1]);
// console.log(arrNYC[3]);
// console.log(arrNYC[4]);

// console.log(arrNYC.length); // Lấy ra tổng số phần tử trong mảng ( độ dài của mảng )
let lastIndex = arrNYC.length - 1; // Luôn trả về vị trí cuối cùng trong mảng
// console.log(arrNYC[lastIndex]);

// Thêm phần tử
// Thêm vào đầu mảng
// thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
// arrNYC.unshift("Băng", "Uyên");
// console.log(arrNYC.unshift("Băng", "Uyên"));
// Thêm vào cuối mảng
// Thểm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
// arrNYC.push("Băng", "Uyên");

// Xoá phần tử
// Xoá ở cuối mảng và trả về giá trị phần tử mà ta đã xoá
// console.log(arrNYC.pop());
// Xoá ở đầu mảng và trả về giá trị phần tử mà ta đã xoá
// arrNYC.shift();

// Xoá phần tử theo vị trí hoặc chèn phần tử mới vào vị trí x
// x là vị trí phần tử muốn xoá
// y là tổng số phần tử muốn xoá từ x
// arrNYC.splice(1, 2);
// arrNYC.splice(1, 0, "My", "My2", "My3");

// căt mảng
// x vị trí bắt đầu muốn cắt, y là vị trí kết thúc
// console.log(arrNYC.slice(1, 3));

// Tìm kiếm
// Nếu có thì trả về vị trí đầu tiên mà nó xuất hiện
console.log(arrNYC.indexOf("Lam"));
// Nếu có thì trả về vị trí cuối cùng nó xuất hiện
console.log(arrNYC.lastIndexOf("Lam"));

// Nối mảng
let arr2 = ["Nhi", "Liên", "My"];
console.log(arrNYC.concat(arr2));
console.log(arrNYC);

// Array to string
// Mặc định thằng toString ngăn các ptu bởi dấu ,
console.log(arrNYC.toString());
// Ngắn các phần tử bằng cái gì gì đó
console.log(arrNYC.join(" - "));

// String to array
let hoTen = "Tạ Văn Định";
console.log(hoTen.split(" "));