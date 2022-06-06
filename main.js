//Bài tập 1: Tính tiền lương nhân viên
document.getElementById("tinhTien").onclick = function () {
  //input: luong1Ngay: number , soNgayLam : number
  var luong1Ngay = document.getElementById("luong1Ngay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  //output: tienLuong: number
  var tienLuong = 0;
  //progress:
  tienLuong = luong1Ngay * soNgayLam;

  document.getElementById("tienLuong").innerHTML = tienLuong + " vnd";
};

//Bài tập 2: Tính giá trị trung bình
document.getElementById("tinhTBinh").onclick = function () {
  //input: soThu1: number , soThu2 : number , soThu3 : number , soThu4: number , soThu5: number
  var soThu1 = +document.getElementById("soThu1").value;
  var soThu2 = +document.getElementById("soThu2").value;
  var soThu3 = +document.getElementById("soThu3").value;
  var soThu4 = +document.getElementById("soThu4").value;
  var soThu5 = +document.getElementById("soThu5").value;

  //output: trungBinh: number
  var trungBinh = 0;
  //progress:
  trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

  document.getElementById("trungBinh").innerHTML = trungBinh;
};

//Bài tập 3: Quy đổi tiền
document.getElementById("quyDoi").onclick = function () {
  //input: giaMacDinh: number , soUsd : number
  const giaMacDinh = 23500;
  var soUsd = document.getElementById("soUsd").value;
  //output: tienQuyDoi: number
  var tienQuyDoi = 0;
  //progress:
  tienQuyDoi = giaMacDinh * soUsd;

  document.getElementById("tienQuyDoi").innerHTML = tienQuyDoi + " vnd";
};

//Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("tinh").onclick = function () {
  //input: chieuDai: number , chieuRong : number
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;
  //output: chuVi: number, dienTich : number
  var chuVi = 0;
  var dienTich = 0;
  //progress:
  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;

  document.getElementById("ketQua").innerHTML =
    "Chu vi là: " + chuVi + " và diện tích là: " + dienTich;
};

//Bài tập 5: Tính tổng 2 ký số
document.getElementById("tinhTong").onclick = function () {
  //input: so: number
  var so = document.getElementById("so").value;
  //output: tong2KySo: number
  var tong2KySo = 0;
  //progress: hangChuc: number, hangDonVi:number,
  var hangChuc = 0;
  var hangDonVi = 0;

  var hangChuc = Math.floor(so / 10);
  var hangDonVi = so % 10;
  tong2KySo = hangChuc + hangDonVi;

  document.getElementById("tong2KySo").innerHTML = tong2KySo;
};
