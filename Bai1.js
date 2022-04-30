// SƠ ĐỒ 3 KHỐI
/**
 * INPUT: Nhập vào 3 số nguyên
 *
 * PROCESS:
 * 1. Lấy input, var bt1-firstNumber, bt1-secondNumber, bt1-thirdNumber
 * 2. Tạo biến var min, middle, max
 * 3. So sánh giá trị đầu vào 
 * 4. Log kết quả ra màn hình
 *
 * OUTPUT: In kết quả ra màn hình
 */
// function Bt1() {
//   //B1:DOM tới các input và lấy giá trị
//   //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
//   //Giá trị là 1 con số, ta cần ép kiểu từ string về number
//   var firstNumber = +document.getElementById("bt1-firstNumber").value;
//   var secondNumber = +document.getElementById("bt1-secondNumber").value;
//   var thirdNumber = +document.getElementById("bt1-thirdNumber").value;
//   //B2: Gán biến tạm và tính toán
//   var min = firstNumber;
//   var middle = firstNumber;
//   var max = firstNumber;
 
//   if (secondNumber < min) {
//     min = secondNumber;
//   }
//   if (thirdNumber < min) {
//     min = thirdNumber;
//   }
//   if (secondNumber > max) {
//     max = secondNumber;
//   }
//   if (thirdNumber > max) {
//     max = thirdNumber;
//   }
//   if (firstNumber !== min && firstNumber !== max) {
//     middle = firstNumber;
//   }
//   if (secondNumber !== min && secondNumber !== max) {
//     middle = secondNumber;
//   }
//   if (thirdNumber !== min && thirdNumber !== max) {
//     middle = thirdNumber;
//   }
//   //B3: Xuất kết quả ra giao diện
//   document.getElementById("ketQua").style.display = "block";
//   document.getElementById("sauXep").innerHTML = `${min} < ${middle} < ${max}`;
// }
function Bt1() {
  //B1:DOM tới các input và lấy giá trị
  //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
  //Giá trị là 1 con số, ta cần ép kiểu từ string về number
  var firstNumber = +document.getElementById("bt1-firstNumber").value;
  var secondNumber = +document.getElementById("bt1-secondNumber").value;
  var thirdNumber = +document.getElementById("bt1-thirdNumber").value;
  //B2: Gán biến tạm và tính toán
  document.getElementById("ketQua").style.display = "block";
  if (firstNumber <= secondNumber && secondNumber <= thirdNumber) {
    document.getElementById("sauXep").innerHTML = `${firstNumber} < ${secondNumber} < ${thirdNumber}`;
  } else if (firstNumber <= thirdNumber && thirdNumber <= secondNumber) {
    document.getElementById("sauXep").innerHTML = `${firstNumber} < ${thirdNumber} < ${secondNumber}`;
  } else if (secondNumber <= firstNumber && firstNumber <= thirdNumber) {
    document.getElementById("sauXep").innerHTML = `${secondNumber} < ${firstNumber} < ${thirdNumber}`;
  } else if (secondNumber <= thirdNumber && thirdNumber <= firstNumber) {
    document.getElementById("sauXep").innerHTML = `${secondNumber} < ${firstNumber} < ${thirdNumber}`;
  } else if (thirdNumber <= firstNumber && firstNumber <= secondNumber) {
    document.getElementById("sauXep").innerHTML = `${thirdNumber} < ${firstNumber} < ${secondNumber}`;
  } else {
    document.getElementById("sauXep").innerHTML = `${thirdNumber} < ${secondNumber} < ${firstNumber}`;
  }
}