// SƠ ĐỒ 3 KHỐI
/**
 * INPUT: Nhập vào 3 số nguyên
 *
 * PROCESS:
 * 1. Lấy input, var a, b, c
 * 2. Tạo biến var evenNumber là biến đếm số chẵn và biến var oddNumber là biến đếm số lẻ
 * 3. Thực hiện phép chia lấy dư cho 2. 
 *     Nếu chia hết thì evenNumber tăng 1, ngược lại oddNumber tăng 1
 * 4. Log kết quả ra màn hình
 *
 * OUTPUT: Số chẳn và số lẻ được đếm.
 */
function Bt3() {
  //B1:DOM tới các input và lấy giá trị
  //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
  //Giá trị là 1 con số, ta cần ép kiểu từ string về number
  var firstNumber = +document.getElementById("bt3-firstNumber").value;
  var secondNumber = +document.getElementById("bt3-secondNumber").value;
  var thirdNumber = +document.getElementById("bt3-thirdNumber").value;
  var count = 0;
  var oddNumber = 0;
  //B2: Tính toán
  if (firstNumber % 2 === 0) {
    count++;
  } else {
    oddNumber++;
  }
  if (secondNumber % 2 === 0) {
    count++;
  } else {
    oddNumber++;
  }
  if (thirdNumber % 2 === 0) {
    count++;
  } else {
    oddNumber++;
  }
  //B3: Xuất kết quả ra giao diện
  document.getElementById("ketQua").style.display = "block";
  document.getElementById(
    "bt3-result"
  ).innerHTML = `Có ${count} số chẵn và có ${oddNumber} số lẻ.`;
}
