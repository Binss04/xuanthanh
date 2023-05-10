// class là khuôn mẫu để tạo ra nhiều đối tượng
// tạo 1 class
// function tenClass (tham số 1, tham số 2, ....) {
// khởi tạo 1 thuộc tính
// this.tên thuộc tính = tham số
// khởi tạo 1 phương thức
// this.tên phương thức = function () {}
// }

// trong class có bao nhiêu thuộc tính thì sẽ có bấy nhiêu tham số
// this dùng để phân biệt đâu là thuộc tính hoặc phương thức

function Nyc(name, age, phone) {
    this.ten = name; // đây là thuộc tính
    this.tuoi = age;
    this.sdt = phone;
    this.camSung = function () { // đây là phương thức
        swal("Buồn khóc huhu");
    };
    this.doi = function () {
        swal("Mình chia tay đi");
    };
    this.diHoc = function (a, b) {
        return a + b;
    }
}
// tạo đối tượng
let nyc1 = new Nyc("Ngọc Trinh", 18, "0987654321");
let nyc2 = new Nyc("Ngọc Trinh 2", 18, "0987654321");
console.log(nyc1);
console.log(nyc2);
// truy xuất thuộc tính
console.log(nyc2.ten);
// truy cập phương thức
// nyc1.camSung();
console.log(nyc2.diHoc(3, 4));

// Array object
let listNYC = [];
listNYC.push(new Nyc("Ngọc Trinh 2", 18, "0987654321"));
listNYC[0] = new Nyc("Ngọc Trinh", 18, "0987654321");
console.log(listNYC);
// truy xuất thuộc tính
// tên mảng [vị trí của đối tượng].tên thuộc tính
console.log(listNYC[0].ten);
// truy cập đến phương thức
// listNYC[0].doi();

// Khai báo 1 class HinhChuNhat
// thuộc tính: chieuDai, chieuRong
// phương thức: chuVi, dienTich ( có trả về )
// tạo 1 array object và trong đó có 5 ptu là đối tượng hcn
// in ra bằng console.log
function HinhChuNhat(chieu_dai, chieu_rong) {
    this.chieuDai = chieu_dai;
    this.chieuRong = chieu_rong;
    this.chuVi = function () {
        return (this.chieuDai + this.chieuRong) * 2;
    };
    this.dienTich = function () {
        return this.chieuDai * this.chieuRong;
    }
}
let arrHCN = [];
arrHCN.push(new HinhChuNhat(5, 4));
arrHCN.push(new HinhChuNhat(6, 4));
arrHCN.push(new HinhChuNhat(7, 4));
arrHCN.push(new HinhChuNhat(8, 4));
arrHCN.push(new HinhChuNhat(9, 4));
console.log(arrHCN);

for (let i = 0; i < arrHCN.length; i++) {
    console.log(`Chu vi của hình chữ nhật thứ ${i + 1} là ${arrHCN[i].chuVi()}`);
    console.log(`Diện tích của hình chữ nhật thứ ${i + 1} là ${arrHCN[i].dienTich()}`);
}