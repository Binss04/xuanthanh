// Tạo 1 class nym
// thuộc tính: tên, năm sinh
// phương thức: tính tuổi ( có trả về )
// tạo 1 mảng đối tượng gồm 5 phần tử thông qua class
// in ra toàn bộ thuộc tính và tuổi

function Nym(name, nam_sinh) {
    this.ten = name;
    this.namSinh = nam_sinh;
    this.tinhTuoi = function () {
        let namNay = new Date().getFullYear();
        return namNay - this.namSinh;
    }
}
let arrNym = [];
arrNym.push(new Nym("Nguyễn Thị A", 2004));
arrNym.push(new Nym("Nguyễn Thị B", 2004));
arrNym.push(new Nym("Nguyễn Thị C", 2004));
arrNym.push(new Nym("Nguyễn Thị D", 2004));
arrNym.push(new Nym("Nguyễn Thị E", 2004));
// console.log(arrNym);
// for (let item of arrNym) {
//     console.log(item.ten);
//     // for (let key in item) { // duyệt 1 object
//     //     console.log(item[key]);
//     // }
//     console.log(item.namSinh);
//     console.log(item.tinhTuoi());
// }



// DOM
// Giúp cho lập trình viên có thể tương tác, tuỳ chỉnh
// với các phần tử HTML, CSS thông qua JS trên nền WEB

// DOM có 3 thành phần
// Element: chính là các thẻ
// Thuộc tính: Chính là những gì nằm ở bên trong thẻ mở của element 
// (id, class, style,...)
// Text: Nội dung bên trong thẻ

// Truy xuất DOM theo tên thẻ
let a = document.getElementsByTagName("p");
// Trả ra 1 mảng đối tượng chính là tất cả các thẻ p
// console.log(a);

// innerHTML có thể can thiệp và thay đổi nội dung trong thẻ
a[1].innerHTML = "Hi hi xin chào các bạn";
// lấy được ra nội dung trong thẻ
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i].outerText);
// }
// can thiệp và thay đổi css
a[1].style.color = "red";
a[1].style.fontSize = "50px";


// Tạo ra 5 nym bằng thẻ h3
// In ra toàn bộ nội dung text
// Đổi màu ( mỗi nym 1 màu )

let arr = document.getElementsByTagName("h3");
// let color = ["red", "green", "violet", "pink", "blue"]
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].outerText);
//     arr[i].style.color = color[i];
// }

// tạo 1 button có sự kiện onclick
// trong hàm thực hiện sự kiện làm công việc sau
// sau mỗi lần click thì sẽ làm thay đổi lần lượt màu của 5 nym