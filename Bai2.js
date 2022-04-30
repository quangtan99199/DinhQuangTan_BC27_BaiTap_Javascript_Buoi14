// SƠ ĐỒ 3 KHỐI
/**
 * INPUT: Nhập vào tên của thành viên sử dụng máy
 *
 * PROCESS:
 * 1. Lấy input, var memberSelector
 * 2. Tạo biến  chứa câu chào của máy
 * 3. So sánh giá trị đầu vào và gán giá trị câu chào cho biến 
 * 4. Log kết quả ra màn hình
 *
 * OUTPUT: Người sử dụng máy
 */
function Bt2() {
    //B1:DOM tới các input và lấy giá trị
  //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
  //Giá trị là 1 con số, ta cần ép kiểu từ string về number
    var member = document.getElementById("memberSelector").value;
    document.getElementById("ketQua").style.display = "block";
//B2: Tính toán
    if (member === "B"){
        document.getElementById("member").innerHTML = "Xin chào Bố!!";
    } else if (member === "M"){
        document.getElementById("member").innerHTML = "Xin chào Mẹ!!";
    } else if (member === "A"){
        document.getElementById("member").innerHTML = "Xin chào Anh trai!!";
    } else if (member === "E"){
        document.getElementById("member").innerHTML = "Xin chào Em gái!!";
    }
}