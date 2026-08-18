let data = [23, 45, 2, 5, 2, 7, 32, 9, 65, 4, 3, 9];

for (let i = 0; i < data.length; i++) {
  document.write(`Array ${i} is ${data[i]} <br>`);
}

function getElement() {
  {
    let el = document.getElementById("input").value;
    if (el < data.length && typeof parseInt(el) === "number") {
      alert(data[el]);
    } else {
      alert("Please Enter Valid Input");
    }
  }
}
