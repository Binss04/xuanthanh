// let arrNYC = ["Vân", "Lam", "Hoa", "Lam", "Nhung"];
// console.log(arrNYC[0]);
// console.log(arrNYC[1]);
// console.log(arrNYC[2]);

// for (let i = 0; i < arrNYC.length; i++) {
//     console.log(arrNYC[i]);
// }

// for (let item of arrNYC) {
//     console.log(item);
// }

// Tạo 1 mảng bằng for gồm 10 ptu là số nguyên bắt đầu từ 1
// Dùng for để tính tổng các số lẻ trong mảng
// Dùng for - of để tính tổng các số chẵn trong mảng
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     // console.log("Đây là i:", i);
//     arr.push(i)
//     // console.log(arr);
// }
// console.log(arr);

// let tongLe = 0;
// for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     // console.log(item);
//     if (item % 2 != 0) {
//         // console.log("Đây là item", item);
//         tongLe += item;
//         // console.log(tongLe);
//     }
// }
// console.log(tongLe);
// let tongChan = 0;
// for (let item of arr) {
//     if (item % 2 == 0) {
//         tongChan += item;
//     }
// }
// console.log(tongChan);

let arrNYC = ["Vân", "Lam", "Hoa", "Thuỷ", "Nhung"];
// Nhập vào 1 tên bất kỳ 
// Kiểm tra xem tên nhập vào có trong mảng hay không
// Nếu có thì in ra "Không nên làm như thế đâu"
// Nếu không có thì thêm tên vừa nhập vào đầu mảng
let nameCheck = prompt("Nhập vào tên cần kiểm tra:");
let isCheck = false;
for (let item of arrNYC) {
    if (item == nameCheck) {
        isCheck = true;
    }
}
if (isCheck == true) {
    console.log("Không nên làm như thế đâu");
} else {
    arrNYC.unshift(nameCheck);
    console.log(arrNYC);
}





