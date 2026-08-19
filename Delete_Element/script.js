let data = [10, 20, 30, 40, 50, 60];
function deleteElement() {
    document.getElementById('para').innerHTML = data;
    let position = document.getElementById('box').value;
    for (let i = position; i <= data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    document.getElementById('para').innerHTML = data;
}
console.log(data)