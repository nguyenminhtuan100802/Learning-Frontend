let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// khai báo hàm
function tenFunction() {}

tenFunction();
// vd
function xinChao() {
  console.log("Xin chào Minh Tuấn");
}

xinChao();

// hàm có tham số
let inputName = prompt("Nhập tên vào đi:");
function xinChaoNguoiDung(name) {
  console.log("Xin chào " + name);
}
xinChaoNguoiDung(inputName);

// hàm trả về
function tinhTong(a, b) {
  return a + b;
}
console.log("hàm tinhTong: " + tinhTong(25, 35.5))
