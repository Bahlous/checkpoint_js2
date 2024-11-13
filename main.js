//***************************Reverse string ************************
function reverseString(str) {
  var revstr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
}
// console.log(reverseString("We are GOMYCODE"))

//*****************************Count Characters:**********************
function countChar(str) {
  return str.length;
}

// console.log(countChar("I am very happy"));
//********************Capitalize Words ***************/
function Capwords(str) {
  var phrase = str.split(" ");
  for (var i = 0; i < phrase.length; i++)
    phrase[i] = phrase[i][0].toUpperCase() + phrase[i].slice(1);
  return phrase.join(" ");
}
// console.log(Capwords("we go to supermarket!"))
// // ***********************min max tableau ***************************
function minMax(arr) {
  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  return `The min, max of this array are: ${[min, max]}`;
}
// console.log(minMax([1, 2, 5, 7, 0, 10, 20]))
// //***********************SumOfArray***************************************/
function Somme(arr) {
  var sum = 0;
  for (var el of arr) {
    sum += el;
  }
  return sum;
}
// console.log(Somme([1,4,8,5,3]))
// //*********************Conditionfunction************ */
function even(arr) {
  for (var elt of arr) {
    if (elt % 2 === 0) {
      console.log(elt + "  is even");
    }
  }
}
// console.log(even([1,5,8,4,9,2]))
// //***********************factoriel**********/
function Factorial(n) {
  if (n < 0) {
    return "choose a positiv number";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  var fact = 1;
  for (var i = n; i > 1; i--) {
    fact *= i;
  }
  return fact;
}
// console.log(Factorial(10))
// //*******************Prime Number************************ */
function prime(n) {
  if (n <= 1) {
    console.log(n + " n'est pas un nombre premier  ");
    return false;
  }
  for (var i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      console.log(
        n + " est divisible par " + i + ", c'est pas un nombre premier"
      );
      return false;
    }
  }
  console.log(n + " est un nombre premier");
  return true;
}
// prime(17);
// prime(8);
// //*******************Fibonacci************************ */
function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
// console.log(fibonacci(8));
