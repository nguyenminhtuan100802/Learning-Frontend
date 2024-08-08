let student = {
  // 34.1 thuộc tính key: value
  fullName: "Minh Tuấn",
  birthYear: 2002,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  scores: [1, 2, 3, 4],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },
  tinhĐTB: function () {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i];
    }
    return sum / this.scores.length;
  },
};

console.log(typeof student);

// 34.2 dot notation
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// 34.3 truy cập phương thức
console.log(student.getAge());
console.log(student.tinhĐTB());

// 34.4 thêm, xóa thuộc tính
student.email = "nguyenminhtuan100802@gmail.com";
console.log(student.email);
console.log(student);

// xóa thuộc tính
delete student.email;
console.log(student);

// 34.5
let person = {
  name: "john",
  age: 30,
};
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
console.log(keys);
console.log(values);
console.log(entries);

// 34.7
