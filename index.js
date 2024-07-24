// Decison making using If-else and switch-case

//Leap Year Checker
function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  




2. //Ticket Pricing
  function getTicketPrice(age) {
    if (age <= 12) {
      return "$10";
    } else if (age >= 13 && age <= 17) {
      return "$15";
    } else if (age >= 18) {
      return "$20";
    } else {
      return "Invalid age";
    }
  }
  
  




//Recursive

//Palindrome Checker
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(start, end) {
      if (start >= end) {
        return true;
      }
      if (str[start] !== str[end]) {
        return false;
      }
      return checkPalindrome(start + 1, end - 1);
    }
  
    return checkPalindrome(0, str.length - 1);
  }
  
 





//Power Function

function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  
  