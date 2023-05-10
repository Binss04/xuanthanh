let slideIndex = 0;
console.log(slideIndex);
// Tự động hiển thị ảnh đầu tiên khi vào trang web
slide();
// Thay thế i++ hay i--
function nextSlide(n) {
    slide(slideIndex += n);
}

function slide() {
    // Dùng DOM để truy cập đến các ảnh
    let image = document.getElementsByClassName("mySlide");
    // Nếu chạy hết ảnh thì quay về vị trí đầu tiên
    if (slideIndex >= image.length) {
        slideIndex = 0;
    }
    // Nếu quay về quá vị trí đầu tiên thì trở lại vị trí cuối cùng trong mảng
    if (slideIndex < 0) {
        slideIndex = image.length - 1;
    }
    // Reset toàn bộ ảnh về trạng thái ẩn
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    // Hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display = "block";
}

let autoImage;
function autoSlide() {
    // Dùng DOM để truy cập đến tất cả các ảnh
    let image = document.getElementsByClassName("mySlide");
    if (slideIndex >= image.length) {
        slideIndex = 0;
    }
    // Reset toàn bộ ảnh về trạng thái ẩn
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    // Hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display = "block";
    slideIndex++;
    autoImage = setTimeout(autoSlide, 2000);
}
// autoSlide();

// Stop Slide
function stopSlide() {
    clearInterval(autoImage);
}

function submit() {
    let giotTinh = document.getElementsByClassName("gioiTinh");
    //   console.log(giotTinh[0].value);
    for (let item of giotTinh) {
        // console.log(item.value);
        // Kiểm tra xem chúng ta chọn giới tính nào
        if (item.checked == true) {
            console.log(item.value);
            var a = item.value;
        }
    }
    console.log(a);
}

