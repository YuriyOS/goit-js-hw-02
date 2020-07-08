let input;
let numbers = [];

do {
  input = prompt("Введите число: ");

  if (input === null) {
    break;
  }

  if (isNaN(input)) {
    alert("Вы ввели не число. Введите число: ");
  } else {
    numbers.push(input);
  }
} while (input != null);

let total = 0;

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += Number(numbers[i]);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
