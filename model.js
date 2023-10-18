//TẠO LỚP ĐỐI TƯỢNG SINH VIÊN, LỚP ĐỐI TƯỢNG PHẢI CÓ METHOD, ĐỐI TƯỢNG THÌ KHÔNG CẦN
function SinhVien(_ma, _ten, _email, _pass, _toan, _van){
   this.ma = _ma;
   this.ten = _ten;
   this.email = _email;
   this.pass = _pass;
   this.toan = _toan;
   this.van = _van;
   this.tinhDTB =function(){
      return (this.toan + this.van)/2;
    };
}