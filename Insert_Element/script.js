let data = [42, 24, 2, 65, 78, 8, 2, 9];

// let newEl = 33
// let position =5

// console.log(data.length);

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
// console.log(data);

function InsertElement() {
  let newEl = document.getElementById("newElement").value;
  let position = document.getElementById("position").value;

  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = parseInt(newEl);
      }
    }
  }

  console.log(data);
}
