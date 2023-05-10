// Đối tượng trong js
// khái niệm về đối tượng

// đối tượng có 2 phần
// Thuộc tính ( đặc điểm ) là những gì góp phần hình thành và nhận dạng đối tượng
// phương thức là những hành động mà đối tượng có thể thực hiện được

let sv1 = {
    ten: "Nguyễn Văn A", // thuộc tính
    tuoi: 18,
    maSV: "PH12345",
    gioiTinh: "Nam",
    'nganh-hoc': "CNTT",
    di: function () { // đây là phương thức chính là HÀM
        swal('Đi bằng 2 chân');
    },
    hienThi: function () {
        return this.ten + " - " + this.maSV;
    }
}
console.log(sv1);
console.log(sv1['ten']); // in ra giá trị thuộc tính ten
console.log(sv1.maSV);
console.log(sv1['nganh-hoc']);
// cách gọi phương thức ở trong đối tượng
sv1.di();
console.log(sv1.hienThi());


// tạo ra 1 đối tượng là crush gồm những thuộc tính
// ten, tuoi, lop, vong 1, vong 2, vong 3
// hiển thị lần lượt tất cả các giá trị của thuộc tính
// có 2 phương thức:
// doi: in ra màn hình "Chia tay đi" ( bằng swal )
// tính tb số đo 3 vòng và in ra bằng console.log
let fullName = prompt("Nhập vào tên:");
let crush_test = {
    ten: fullName,
    tuoi: 18,
    lop: "WE18314",
    vong1: 90,
    vong2: 60,
    vong3: 100,
    doi: function () {
        swal('Chia tay đi');
    },
    soDo: function () {
        let trungBinh = (this.vong1 + this.vong2 + this.vong3) / 3;
        return trungBinh;
    }
}
console.log(crush_test.ten);
console.log(crush_test.tuoi);
console.log(crush_test.lop);
console.log(crush_test.vong1);
console.log(crush_test.vong2);
console.log(crush_test.vong3);
crush_test.doi();
console.log(crush_test.soDo());

// Tạo ra 1 button Hình chữ nhật với sự kiện là onclick
// Trong hàm thực hiện việc onclick tạo 1 đối tượng là hinhChuNhat
// có 2 thuộc tính: chieuDai, chieuRong ( nhập từ bàn phím )
// có 2 phương thức: tinhChuVi và tinhDienTich
// Hiển thị ra chu vi và diện tích của hình chữ nhật bằng console.log