// dùng parseInt hoặc number để ép kiểu từ tring về kiểu int, prompt nhập vào là kiểu string
let numberA = parseInt(prompt("Nhập số a: "));
let numberB = 5;

console.log("Kiểu dữ liệu numberA: " + typeof numberA);
console.log("Kiểu dữ liệu numberB: " + typeof numberB);

// công a vs b
let ketQua = numberA + numberB;
console.log("a + b = " + ketQua);
console.log("Kiểu dữ liệu ketQua: " + typeof ketQua);
