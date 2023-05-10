function myButton() {
    let thongBao = document.getElementsByClassName('thongBao');
    // Dùng DOM để truy xuất đến phần tử HTML bằng ID
    let email = document.getElementById('email');
    // console.log(email.value); // in ra giá trị nhập vào từ ô input

    // Validate của email
    let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    // Nếu nhập sai thì trả về FALSE, nếu nhập đúng thì trả về là TRUE
    // console.log("Kiểm tra email:", regexEmail.test(email.value));

    // Nếu không nhập thì hiển thị alert Bạn chưa nhập email
    // Nếu nhập sai thì hiển thị alert Bạn nhập sai email

    let checkEmail = regexEmail.test(email.value);
    // Validate rỗng
    if (email.value == "" || email.value == null) {
        // alert("Bạn chưa nhập email");
        thongBao[0].innerHTML = 'Bạn chưa nhập email';
        return;
    } else if (!checkEmail) {
        // alert("Nhập sai email");
        thongBao[0].innerHTML = 'Bạn nhập sai email';
        return;
    } else {
        thongBao[0].innerHTML = '';
    }

    // Làm tương tự với nhập số điện thoại
    let sdt = document.getElementById('sdt');
    let regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let checkSDT = regexSDT.test(sdt.value);
    if (sdt.value == "" || sdt.value == null) {
        thongBao[1].innerHTML = 'Bạn chưa nhập sdt';
        return;
    } else if (!checkSDT) {
        thongBao[1].innerHTML = 'Bạn nhập sai sdt';
        return;
    } else {
        thongBao[1].innerHTML = '';
    }
}