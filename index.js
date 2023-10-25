//B1. Tạo 1 array rỗng
var dSSV = [];
/**
 * B1. Lấy JSON lên từ LOCALSTORAGE
 * B2. Chuyển JSON thành array vì JSON chưa sử dụng được trực tiếp.
 * B3. MAP biến đổi result(object chưa có method) thành dSSV(object có method)
 * B4. Lấy array đi xử lý, lưu xuống dSSV
 */
//Lấy JSON lên từ LOCALSTORAGE
var dataJson = localStorage.getItem('DSSV_LOCAL');
if(dataJson != null){
  //Chuyển JSON thành array vì JSON chưa sử dụng được trực tiếp.
  //Chưa có method
  let result = JSON.parse(dataJson);
  //MAP biến đổi result(object chưa có method) thành dSSV(object có method)
  //Có method
  dSSV = result.map(function(item){
    return new SinhVien(
      item.ma, 
      item.ten, 
      item.email, 
      item.pass, 
      item.toan, 
      item.van );
  });
  //Lấy array đi xử lý, lưu xuống dSSV
  renderDSSV(dSSV);
}
//THÊM SINH VIÊN:
/**
 * B1. Tạo 1 array rỗng
 * B2. Dom tới các thẻ input
 * B3. Tạo object tương ứng
 * B4. Thêm sv vào dSSV
 * B5. Chuyển array thành JSON
 * B6. Lưu xuống LOCALSTORAGE
 * B7. Lấy array đi xử lý
 */
function themSV(){ //8 BƯỚC (ĐÃ CÓ VALIDATE)
 //B2. Dom tới các thẻ input
 var _ma = domID('txtMaSV').value;
 var _ten = domID('txtTenSV').value;
 var _email = domID('txtEmail').value;
 var _pass = domID('txtPass').value;
 var _toan = domID('txtDiemToan').value*1;
 var _van = domID('txtDiemVan').value*1;
 //B3. Tạo object tương ứng
//  var sinhVien = {
//   ma: _ma,
//   ten: _ten,
//   email: _email,
//   pass: _pass,
//   toan: _toan,
//   van: _van,
//   tinhDTB: function(){
//     return (this.toan + this.van)/2;
//   }
//  };
var sinhVien = new SinhVien(_ma, _ten, _email, _pass, _toan, _van);
//VALIDATE:
var isValid = kiemTraNhap('txtMaSV', 'spanMaSV',0) & kiemTraNhap('txtTenSV', 'spanTenSV', 1) & kiemTraNhap('txtEmail', 'spanEmailSV', 2) & kiemTraNhap('txtPass', 'spanMatKhau', 3) & kiemTraNhap('txtDiemToan', 'spanToan', 4) & kiemTraNhap('txtDiemVan', 'spanVan', 5);
isValid = isValid && kiemTraSo('txtMaSV', 'spanMaSV', 8);
isValid = isValid && kiemTraTrung(sinhVien.ma, dSSV);
isValid = isValid && KiemTraTen() & kiemTraSo('txtDiemToan', 'spanToan', 9) & kiemTraSo('txtDiemVan', 'spanVan', 10) & KiemTraEmail(11) & kiemTraDoDai(sinhVien.ma, 'spanMaSV', 12, 5, 5) & kiemTraMatKhau(sinhVien.pass, 13); 
if(isValid){
   //B4. dSSV thêm sinhVien vào chính nó
 dSSV.push(sinhVien);
 //B5. Chuyển array thành JSON
 var dataJson = JSON.stringify(dSSV);
 //B6. Lưu xuống LOCALSTORAGE
 localStorage.setItem('DSSV_LOCAL', dataJson);
 //B7. Lấy array đi xử lý ~ tạo renderDSSV
 renderDSSV(dSSV);
}
}

function xoaSV(id){ //5 BƯỚC
  /**
   * B1. Tìm vị trí cần xoá dựa theo id
   * B2. Xoá vị trí đi 1
   * B3. Chuyển array thành JSON
   * B4. Lưu xuống LOCALSTORAGE
   * B5. Lấy array đi xử lý - tạo renderDSSV
   */
  //B1. Tìm vị trí cần xoá dựa theo id
  var viTri = dSSV.findIndex(function(item){
    return item.ma == id;
  });
  //B2. Xoá vị trí đi 1
  dSSV.splice(viTri, 1);
  //B3. Chuyển array thành JSON
  var dataJson = JSON.stringify(dSSV);
  //B4. Lưu xuống LOCALSTORAGE
  localStorage.setItem('DSSV_LOCAL', dataJson);
  //B5. Lấy array đi xử lý - tạo renderDSSV
  renderDSSV(dSSV);
}

function suaSV(id){ //3 BƯỚC
  /**
   * B1. Tìm vị trí cần xoá dựa theo id
   * B2. dom lại ô input (.value)
   * B3. Lấy array đi xử lý - tạo renderdSSV
   */
  //B1. Tìm vị trí cần xoá dựa theo id
  var viTri = dSSV.findIndex(function(item){
    return item.ma == id;
  });
  //B2. Lấy vị trí trong dSSV 
   var sV = dSSV[viTri];
  //B3. dom lại ô input (.value)
  //Chỉ đọc vì nếu thay đổi mã sV thì thay đổi vị trí sau khi cập nhật
  domID('txtMaSV').readOnly = true;
  domID('txtMaSV').value = sV.ma;
  domID('txtTenSV').value = sV.ten;
  domID('txtEmail').value = sV.email;
  domID('txtPass').value = sV.pass;
  domID('txtDiemToan').value = sV.toan;
  domID('txtDiemVan').value = sV.van;
}
function capNhatSV(){ //8 BƯỚC
  /**
   * B1. dom tới các thẻ input
   * B2. Tìm vị trí dựa vào _ma (vì đã dom tới là đã có vị trí)
   * B3. Tạo object tương ứng
   * B4. Lấy vị trí trong dSSV
   * B5. Xoá chính nó và thêm vào nhân viên, dùng SPLICE
   * B6. Chuyển array thành JSON
   * B7. Lưu xuống LOCALSTORAGE
   * B8. Lấy array đi xử lý, tạo renderDSSV
   */
  //B1. dom tới các thẻ input
  var _ma = domID('txtMaSV').value;
  var _ten = domID('txtTenSV').value;
  var _email = domID('txtEmail').value;
  var _pass = domID('txtPass').value;
  var _toan = domID('txtDiemToan').value*1;
  var _van = domID('txtDiemVan').value*1;
  //B2. Tìm vị trí dựa vào _ma (vì đã dom tới là đã có vị trí)
  var viTri = dSSV.findIndex(function(item){
    return item.ma == _ma;
  });
  //B3. Tạo object tương ứng
  // var sinhVien = {
  //   ma: _ma,
  //   ten: _ten,
  //   email: _email,
  //   pass: _pass,
  //   toan: _toan,
  //   van: _van,
  //   tinhDTB: function(){
  //     return (this.toan + this.van)/2;
  //   }
  //  };
  var sinhVien = new SinhVien(_ma, _ten, _email, _pass, _toan, _van);

   //B4. Lấy vị trí trong dSSV, vì tên biến gán là object sinhVien đã có nên không tạo
   dSSV[viTri] = sinhVien;
   //B5. Xoá chính nó và thêm vào nhân viên, dùng SPLICE
   //B6. Chuyển array thành JSON
   var dataJson = JSON.stringify(dSSV);
   //B7. Lưu xuống LOCALSTORAGE
   localStorage.setItem('DSSV_LOCAL', dataJson);
   dSSV.splice(viTri, 1, sinhVien);
   //B8. Lấy array đi xử lý, tạo renderDSSV
   renderDSSV(dSSV);
}

function domID(id){
  return document.getElementById(id);
}