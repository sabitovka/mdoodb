const prompt = require('./prompt');
const moment = require('./moment');

function fn(X, N) {
  return Math.pow(-1, N-1) * (Math.pow(X, N)/N);
}

function sum(X, N) {
  if (N === 1) {
    return fn(X, N);
  }
  return fn(X, N) + sum(X, N-1);
}

async function task1() {
  console.log(`\nЗадание 1. Написать скрипт, реализующий вычисление выражений по
  индивидуальному   варианту. Обеспечить ввод исходных данных. Массивы при
  выполнении этого задания не используются! Отобразить основные промежуточные
  результаты.
  
  Вариант 6. Вещественное число X (|X| < 1) and Целое N (> 0) заданы. Вычислите сумму:
    X - X^2/2 + X^3/3 - X^4/4 + ... + (-1)^(N-1)*(X^N)/N
  Результат необходимо сверить с ln(1 + X).\n`);

  const X = await prompt('Введите вещественное X (|X| < 1): ', (X) => Math.abs(X) < 1);
  const N = await prompt('Введите целое N (N > 0): ', (N) => Number.isInteger(N) && N > 0);

  const F = sum(X, N);
  console.log('\x1b[32m%s\x1b[0m', `F(X, N) =\t${F}`)
  console.log('\x1b[32m%s\x1b[0m', `ln(1 + X) =\t${Math.log1p(X)}`);
  console.log(`При X = ${X}, N = ${N}`);

  await prompt('Нажмите Enter, чтобы перейти к следующему заданию...');
}

const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
const timeDif = (time1, time2) => Math.ceil(Math.abs(time1.getTime() - time2.getTime()) / (1000 * 60));

async function task2() {
  console.log(`Задание 2. Сформировать фразу по индивидуальному заданию.
  Общая часть фразы:
  Я, студент группы <группа> <фамилия и инициалы>, родился <дата>, это был
  день <название дня недели>;
  Индивидуальное задание:
  Вариант 6. На сегодня <дата> я прожил (прожила) <число> дней и с начала пары
  прошло <число> минут.\n`);

  moment.locale('ru');
  const birthdayStr = '2000-03-10';
  const birthday = moment(birthdayStr);
  const lesson = new Date();
  lesson.setHours(9, 50);
  
  console.log(`Я студент группы ИСм-22 Сабитов К.А. родился ${birthday.format('LL')}, это была ${birthday.format('dddd')}`);
  console.log(`На сегодня ${moment().format('LL')} я прожил ${dayDif(new Date(birthdayStr),
    new Date())} дней и с начала пары прошло ${timeDif(lesson, new Date())} минут.`);
}

async function main() {
  try {
    await task1();
    await task2();
  } catch (e) {
    console.error(e.message);
  }
}

main();