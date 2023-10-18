/**
 * B1. Tạo 1 chuỗi rỗng
 * B2. Tạo vòng lặp for
 * B3. Lấy vị trí i trong dSSV
 * B4. Tạo chuỗi các dòng tr
 * B5. Thêm các dòng tr vào chuỗi rỗng
 * B6. dom tới id hiện trên giao diện
 */
function renderDSSV(dSSV){
    var contentHTML = "";
    for(i =0; i< dSSV.length; i++){
      var sV = dSSV[i];
      var string = `
      <tr>
        <td>${sV.ma}</td>
        <td>${sV.ten}</td>
        <td>${sV.email}</td>
        <td>${sV.tinhDTB()}</td>
        <td>
           <button class="btn btn-danger" onclick = "xoaSV('${sV.ma}')">Xoá</button>
           <button class="btn btn-warning" onclick = "suaSV('${sV.ma}')">Sửa</button>
        </td>
      </tr>
      `
      contentHTML += string;
    } 
    domID('tbodySinhVien').innerHTML = contentHTML;
  }