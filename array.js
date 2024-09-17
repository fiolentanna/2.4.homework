let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];


//создадим функцию для обозначения названия месяцев,  в которых затраты меньше либо равны 1000
function getMonthsBelowLimit(arr) {
  let arrMonthbelowLimit = []; //массив с индексами месяцев, в которых затраты <= 1000

  arr.forEach((value, index) => {
    if (value <= 1000) {
      let month = new Date(2024, index).toLocaleString("en-US", {
        month: "long",
      });
      arrMonthbelowLimit.push(month);
    }
  });
  return arrMonthbelowLimit;
}


// создадим переменную с результатами сумм для массивов
let expectedResult = [40590, 148200, 25709]

//  функция для рассчета суммы в массиве с элементами более 1000
function calculateExpences(expencesArray) {
  let sum = 0;
  for (monthExp of expencesArray) {
    if (monthExp > 1000) {
      sum += monthExp;
    }
  }
  return sum;
}

console.log(calculateExpences(expencesExamples[0].yearlyExpences));

// тестовая функция для сравнения результата суммирования и ожидаемого результата
function testCalculateExpences(expectedResult,expencesArray) {
  let actualResult = calculateExpences(expencesArray)
  if (actualResult === expectedResult) {
    console.log(`${actualResult} vs ${expectedResult} correct calculation`)
  } else {
    console.log(`${actualResult} vs ${expectedResult} wrong calculation`)
  }
}

// работа с циклами для проверки полученного результата суммы для каждого массива в массиве и ожидаемого результата суммы
expencesExamples.forEach((expencesEx, index) => {
  testCalculateExpences(expectedResult[index], expencesEx.yearlyExpences)
})

//функция для вывода названия месяцев, где затраты менее или равны 1000
function printMonthsBelowLimit() {
  expencesExamples.forEach((value, index) => {
    console.log(
      `Test ${
        index + 1
      }: Месяц, где затраты менее или равны 1000 ${getMonthsBelowLimit(
        value.yearlyExpences
      )}`
    );
  });
}

//вызов функции для вывода названия месяцев, где затраты менее или равны 1000
printMonthsBelowLimit();