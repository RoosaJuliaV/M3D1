/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y)
      } else {
      return (x + y)
     }
   }
  console.log(sumTriple(5, 4))
  console.log(sumTriple(5, 5))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function sumCheck (x, y) {
    if ((x == 50 || y == 50) || (x + y == 50)) {
        return true
    } else {
        return false
    }
}
console.log(sumCheck(5, 5))
console.log(sumCheck(25, 25))
console.log(sumCheck(50,5))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function cutString(anotherString) {
    let splitString = anotherString.split("")
splitString.shift()
return splitString.join("")
}
console.log(cutString("Strive"))

/*

4)
 Create a function to find the largest of three given integers.
*/

function findLargest() {
    return Math.max(10, 20, 30)
  }
  console.log(findLargest())

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function checkRange(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || 
    (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true
       } else {
      return false
    }
  }
  console.log(checkRange(30, 143))
  console.log(checkRange(50, 50))
  console.log(checkRange(89,89))
  

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

function createString (str, n) {
    if (n < 0)
    return false
    else
  return str.repeat(n)
 }
console.log(createString("strive", 3))
console.log(createString("strive", -1))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function checkCityName(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
        || (str.substring(0, 3) == 'New')))
        {
        return str
        } else {
    return ''
  }
}
console.log(checkCityName("Los Angeles"))
console.log(checkCityName("New York"))
console.log(checkCityName("Paris"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function sumOfThree(a, b, c) {
    return a + b + c
}
console.log(sumOfThree(5, 10, 15))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

/* 11)

Create a function to find the longest string from a given array of strings. */



/* 12) Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

/* 13)

Create a function to find the index of the greatest element of a given array of integers */

/* 14)

Create a function to get the largest even number from an array of integers. */

/* 16)

Create a function to check from two given integers, whether one is positive and another one is negative. */

/* 17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. */

/* 18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */

/* 19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

/* 20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/