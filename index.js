let numbers = [];
document.getElementById("luuVaoMang").onclick = function () {
  //Thêm phần tử vào chuỗi numbers
  let number = +document.getElementById("number").value;
  numbers.push(number);

  //Biến mảng thành chuỗi để xuất ra màn hình
  let strNumbers = numbers.join(", ");
  //Đầu ra:
  let result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = strNumbers;
};

// Câu 1
document.getElementById("tinhTongSoDuong").onclick = function () {
  // Xử lý:
  let tongSoDuong = numbers.reduce((tongSoDuong, value, index) => {
    return value > 0 ? tongSoDuong + value : tongSoDuong;
  }, 0);

  //Đầu ra:
  let result1 = document.getElementById("result1");
  result1.style.display = "block";
  result1.innerHTML = "Tổng các số dương trong mảng: " + tongSoDuong;
};

// Câu 2
document.getElementById("demSoDuong").onclick = function () {
  //Xử lý:
  let demSoDuong = numbers.reduce((demSoDuong, value, index) => {
    return value > 0 ? demSoDuong + 1 : demSoDuong;
  }, 0);

  //Đầu ra:
  let result2 = document.getElementById("result2");
  result2.style.display = "block";
  result2.innerHTML = "Các số dương trong có mảng: " + demSoDuong;
};

// Câu 3
document.getElementById("timSoNhoNhat").onclick = function () {
  //Xử lý:
  let min = Math.min(...numbers);

  //Đầu ra:
  let result3 = document.getElementById("result3");
  result3.style.display = "block";
  result3.innerHTML = "Số nhỏ nhất trong mảng: " + min;
};

// Câu 4
document.getElementById("timSoDuongNhoNhat").onclick = function () {
  //Xử lý:
  // Lọc ra 1 mảng chỉ có số dương
  let mangSoDuong = numbers.filter((value, index) => {
    return value > 0;
  });
  //Tìm số dương nhỏ nhất trong mảng vừa lọc ra
  let soDuongNhoNhat = Math.min(...mangSoDuong);

  //Đầu ra:
  let result4 = document.getElementById("result4");
  result4.style.display = "block";
  result4.innerHTML = "Số dương nhỏ nhất trong mảng: " + soDuongNhoNhat;
};

// Câu 5
document.getElementById("timSoChanCuoiCung").onclick = function () {
  //Xử lý:
  //Lọc ra 1 mảng mới chỉ có số chẵn:
  let mangSoChan = numbers.filter((value, index) => {
    return value % 2 === 0;
  });
  //Tạo biến soChanCuoiCung = -1, nếu mangSoChan ko phải mảng rỗng thì soChanCuoiCung sẽ dc gán giá trị cuối cùng của mangSoChan.
  let soChanCuoiCung = -1;
  if (mangSoChan.length > 0) {
    soChanCuoiCung = mangSoChan[mangSoChan.length - 1];
  }

  //Đầu ra:
  let result5 = document.getElementById("result5");
  result5.style.display = "block";
  result5.innerHTML = "Số chẵn cuối cùng trong mảng: " + soChanCuoiCung;
};

// Câu 6
document.getElementById("doiViTri").onclick = function () {
  //Xử lý:
  let viTri1 = +document.getElementById("viTri1").value;
  let viTri2 = +document.getElementById("viTri2").value;
  //tạo 1 mảng numbers6 có giá trị giống với mảng ban đầu
  let numbers6 = [...numbers];
  //đổi các giá trị của numbers6 thành các giá trị của mảng numbers ở vị trí cần đổi
  numbers6[viTri1] = numbers[viTri2];
  numbers6[viTri2] = numbers[viTri1];

  //Đầu ra:
  let result6 = document.getElementById("result6");
  result6.style.display = "block";
  result6.innerHTML = numbers6;
};

// Câu 7
document.getElementById("sapXep").onclick = function () {
  //Xử lý:
  let mangTangDan = [...numbers];
  mangTangDan.sort((a, b) => a - b);

  //Đầu ra:
  let result7 = document.getElementById("result7");
  result7.style.display = "block";
  result7.innerHTML = "Mảng sắp xếp tăng dần: " + mangTangDan;
};

// Câu 8
document.getElementById("timSoNguyenTo").onclick = function () {
  //Xử lý:
  //Lọc ra 1 mảng mới với các giá trị lớn hơn 1
  let arr8 = numbers.filter((value, index) => {
    return value > 1;
  });
  //xét từng phần tử của mảng mới qua function xác định số nguyên tố dc tạo ở dưới, nếu tìm dc số nguyên tố đầu tiên sẽ break ngay lập tức và xuất ở đầu ra
  let soNguyenToDauTien = 0;
  for (let i = 0; i < arr8.length; i++) {
    soNguyenToDauTien = soNguyenTo(arr8[i]);
    if (soNguyenToDauTien !== -1) {
      break;
    }
  }

  //Đầu ra:
  let result8 = document.getElementById("result8");
  result8.style.display = "block";
  result8.innerHTML = "Số nguyên tố đầu tiên: " + soNguyenToDauTien;
};

//Tạo function với chức năng xác định số nguyên tố, nếu là số nguyên tố thì count sẽ bằng 2 sau đó return về số đó, còn nếu ko phải thì sẽ return về -1
function soNguyenTo(a) {
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (!(a % i)) {
      count++;
    }
  }

  if (count == 2) {
    return a;
  } else {
    return -1;
  }
}

// Câu 9:
// Nhập vào mảng số thực:
let realNumbers = [];
document.getElementById("luuVaoMangSoThuc").onclick = function () {
  //Lưu vào mảng:
  let realNumber = +document.getElementById("realNumber").value;
  realNumbers.push(realNumber);

  //Xuất mảng ra ngoài màn hình:
  let soThuc = document.getElementById("soThuc");
  soThuc.style.display = "block";
  soThuc.innerHTML = realNumbers;
};

// Đếm số nguyên:

//tạo 1 function xác định số nguyên:
function soNguyen(a) {
  if ((a * 10 - ((a * 10) % 10)) / 10 === a) {
    return 1;
  } else {
    return 0;
  }
}

//
document.getElementById("demSoNguyen").onclick = function () {
  //tạo biến countRealNumber để đếm số nguyên
  let countRealNumber = 0;
  for (let i = 0; i < realNumbers.length; i++) {
    countRealNumber += soNguyen(realNumbers[i]);
  }

  //Đầu ra:
  let result9 = document.getElementById("result9");
  result9.style.display = "block";
  result9.innerHTML = "Số nguyên có trong mảng: " + countRealNumber;
};

// Câu 10:
document.getElementById("soSanh").onclick = function () {
  //Xử lý:
  let ketQua = "";
  // đếm số dương: bằng cách dùng filter để tạo ra 1 mảng toàn số dương
  let duongs = numbers.filter((value, index) => {
    return value > 0;
  });
  // đếm số âm: bằng cách dùng filter để tạo ra 1 mảng toàn số âm
  let ams = numbers.filter((value, index) => {
    return value < 0;
  });
  // sau đó so sánh độ dài của 2 mảng duongs và ams để xuất vào ketQua 
  if (duongs.length < ams.length) {
    ketQua += "Số dương < số âm";
  } else if (duongs.length > ams.length) {
    ketQua += "Số dương > số âm";
  } else {
    ketQua += "Số dương = số âm";
  }

  //Đầu ra:
  let result10 = document.getElementById("result10");
  result10.style.display = "block";
  result10.innerHTML = ketQua;
};
