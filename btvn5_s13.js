function calculateArray() {
let count = Math.floor(Math.random() * 11) + 10;
let numbers =[];
for (let i = 0; i < count; i ++) {
    let randomNum = Math.floor(Math.random() *100) + 1;
    numbers.push(randomNum);
}
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ) {
        sumEven += numbers[i];
    } else {
        sumOdd += numbers[i];
    }
}
alert("Mảng ngẫu nhiên:" + numbers.join(", "));
alert("Tổng các số chẵn là: " + sumEven);
alert("Tổng các số lẻ là: " + sumOdd);

console.log ("Mảng:", numbers);
console.log ("Tổng chẵn:", sumEven);
console.log("Tổng lẻ:", sumOdd);
}