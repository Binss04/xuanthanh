let so1 = 3;
let so2 = 5;
let c = 7;

// let tong = a + b;
// let tong2 = a + c;

// Hàm là gì
// khai báo hàm
function tenHam() {
    // Khi gọi hàm thì nó sẽ thực hiện các đoạn code trong đây
    alert("Chào mừng đến với bình nguyên vô tận");
}
// cách gọi hàm
// tenHam();


// Hàm có tham số
function tongHaiSo(a, b) {
    console.log(a);
    console.log(b);
    var tong = a + b;
    // hàm ko trả về
    // console.log(tong);
    // hàm có trả về
    return tong;
}
// tongHaiSo(so1, so2);
// in ra kết quả của hàm trả về
// console.log(tongHaiSo(so1, so2));

// Không thể truy xuất tham số từ bên ngoài
// console.log("Đây là tham số a:", a);
// Không thể truy xuất giá trị của biến trong hàm
// console.log(tong);

// Hàm ko có tham số
function tongBaSo() {
    let a = 3;
    let b = 5;
    let c = 7;
    let tong = a + b + c;
    // hàm ko trả về
    // console.log(tong);
    // Hàm có trả về
    return tong;
}
// tongBaSo();
// console.log(tongBaSo());


// Nhập vào a và b ( ax + b = 0 )
// Kiểm tra phương tình có nghiệm hay ko
// Giải bằng 2 cách: Hàm ko trả về có tham số/ Hàm ko trả về ko có tham số

// Có tham số
// let a = Number(prompt("Nhập vào a:"));
// let b = Number(prompt("Nhập vào b:"));
function ptBac1CoThamSo(a, b) {
    if (a == 0 && b == 0) {
        console.log("Phương trình vô số nghiệm");
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    } else if (a != 0 && b == 0) {
        console.log("Phương trình có nghiệm x = 0");
    } else {
        let x = -b / a;
        console.log("Phương trình có nghiệm x =", x);
    }
}
// ptBac1(a, b);
// Không có tham số
function ptBac1() {
    let a = Number(prompt("Nhập vào a:"));
    let b = Number(prompt("Nhập vào b:"));
    if (a == 0 && b == 0) {
        console.log("Phương trình vô số nghiệm");
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    } else if (a != 0 && b == 0) {
        console.log("Phương trình có nghiệm x = 0");
    } else {
        let x = -b / a;
        console.log("Phương trình có nghiệm x =", x);
    }
}
// ptBac1();

function change() {
    prompt("Dữ liệu thay đổi là");
}

swal("Hello world!");