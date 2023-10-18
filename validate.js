//Kiểm tra nhập là kiểm tra tất cả ô input, nhiều id nên dùng tham số truyền vào
mangThongBao = ["Vui lòng nhập mã sinh viên", "Vui lòng nhập tên sinh viên", "Vui lòng nhập email", "Vui lòng nhập mật khẩu", "Vui lòng nhập điểm toán", "Vui lòng nhập điểm văn", "Mã sinh viên đã được sử dụng", "Nhập tên bằng chữ cái", "Nhập mã SV bằng số", "Nhập điểm toán bằng số", "Nhập điểm văn bằng số", "Email không hợp lệ", "Mã SV chứa 5 số", "Mật khẩu chứa từ 6 đến 10 kí tự, 1 số, 1 chữ hoa, 1 chữ thường, 1 kí tự đặc biệt"]
function kiemTraNhap(idField, idThongBao, indexMangTB){
    var field = domID(idField).value;
    if(field == ""){
        //Không hợp lệ
        domID(idThongBao).innerHTML = mangThongBao[indexMangTB];
        return false;
    } 
    domID(idThongBao).innerHTML = "";
    return true;
}

//Kiểm tra số
function kiemTraSo(idField, idThongBao, indexMangTB){
    var so = domID(idField).value;
    var mangSo = /^[0-9]+$/;
    if(so.match(mangSo)){
        domID(idThongBao).innerHTML = "";
        return true;
    } 
    domID(idThongBao).innerHTML = mangThongBao[indexMangTB];
}

//Kiểm tra có trùng hay không
function kiemTraTrung(object, dSSV){
   var viTri = dSSV.findIndex(function(item){
    return item.ma == object;
   });
   //Bằng -1 là chưa tìm thấy (chưa trùng), đúng mục đích nên hợp lệ
   if(viTri == -1){
    //hợp lệ
    domID('spanMaSV').innerHTML = "";
    return true;
   }
   domID('spanMaSV').innerHTML = mangThongBao[6];
   return false;
}

//Kiểm tra tên là chữ
function KiemTraTen(){
    var ten = domID('txtTenSV').value;
    var mangTen = new RegExp("^[A-Za-z]+$");
    if(mangTen.test(ten)){
        domID('spanTenSV').innerHTML = "";
        return true;
    }
    domID('spanTenSV').innerHTML = mangThongBao[7];
    return false;
}

//Kiểm tra email
function KiemTraEmail(indexMangTB){
    var email = domID('txtEmail').value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(re)){
        domID('spanEmailSV').innerHTML = "";
        return true;
    }
    domID('spanEmailSV').innerHTML = mangThongBao[indexMangTB];
}

//Kiểm tra độ dài
function kiemTraDoDai(object, idThongBao, indexMangTB, min, max){
    var length =object.length;
    if(min <= length && length <= max){
        domID(idThongBao).innerHTML = "";
        return true;
    }
    domID(idThongBao).innerHTML = mangThongBao[indexMangTB];
    return false;
}

//Kiểm tra mật khẩu
function kiemTraMatKhau(object, indexMangTB){
    const re = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    if(re.test(object)){
        domID('spanMatKhau').innerHTML = "";
        return true;
    }
    domID('spanMatKhau').innerHTML = mangThongBao[indexMangTB];
    return false;
}