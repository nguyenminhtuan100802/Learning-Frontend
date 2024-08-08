// const Student = function (fullName, ID, birth, homeTown) {
//   // thuộc tính
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birth = birth;
//   this.homeTown = homeTown;

//   // phương thức
//   this.showInfo = function () {
//     return this.fullName + this.ID + this.homeTown;
//   };
// };

function Student(fullName, ID, birth, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birth = birth;
  this.homeTown = homeTown;

  // phương thức
  this.showInfo = function () {
    return this.fullName + this.ID + this.homeTown;
  };
}

const sv1 = new Student("tuan", 123, 1008, "hcm");
const sv2 = new Student("tuan2", 456, 100802, "hn");
console.log(sv1);
console.log(sv1.showInfo());
console.log(sv2);
console.log(sv2.showInfo());
