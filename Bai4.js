// SƠ ĐỒ 3 KHỐI
/**
 * INPUT: Nhập vào 3 số nguyên
 *
 * PROCESS:
 * 1. Lấy input, var a, b, c lần lượt là 3 cạnh của tam giác
 * 2. Tạo biến var result là kết quả loại tam giác
 * 3. So sánh đầu vào với ddieuf kiện thỏa tam giác
 * 4. Sử dụng if else để xét từng loại tam giác
 * 5. Log kết quả ra màn hình
 *
 * OUTPUT: Loại tam giác
 */
function Bt4() {
  //B1:DOM tới các input và lấy giá trị
  //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
  //Giá trị là 1 con số, ta cần ép kiểu từ string về number
  var a = +document.getElementById("bt4-firstNumber").value;
  var b = +document.getElementById("bt4-secondNumber").value;
  var c = +document.getElementById("bt4-thirdNumber").value;
  var result = "";
  //B2:Thực hiện tính toán
  if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
    //Điều kiện tạo thành tam giác
    if (a === b && b === c) {
      result = "Tam giác đều";
    } else if (a === b || b === c || a === c) {
      result = "Tam giác cân";
    } else if (
      a * a + b * b === c * c ||
      a * a + c * c === b * b ||
      b * b + c * c === a * a
    ) {
      result = "Tam giác vuông";
    } else {
      result = "Tam giác thường";
    }
  } else {
    result = "Không hợp lệ";
  }
  //B3: Xuất kết quả ra giao diện
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("bt4-result").innerHTML = result;
}
