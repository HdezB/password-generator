// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passwordConditions = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChars: ['!', '#', '"', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '|', '{', '}', '~']
};
//Function to create a random number, with the parameters (min & max)
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
}
//Asks the user for the length of the password and returns the value
function passwordLength() {
  var passwordLength = window.prompt("State the desire length for password (8 - 128 characters)?");
  while ((passwordLength < 8) || (passwordLength > 128) || (passwordLength === null)) {
    passwordLength = window.prompt("Out of bounce. Please choose a length from 8 to 128 characters?");
  }
  return passwordLength;
}
//Generates the password
function generatePassword() {
  var length = passwordLength();

    var lowerCaseConfirm = window.confirm("Would you like lowercases?");
    var upperCaseConfirm = window.confirm("Would you like UPPERCASES?");
    var numeriConfirm = window.confirm("Would you like numbers?");
    var specialChars = window.confirm("Would you like special characters?");

    var password = "";
    //This for-loop iterates depending on the length of the password and adds random characters depending on the criteria of the user.
    for (var i = 0; i <= length - 1; i++) {
      //Generates a random character for the password
      var lowerCharacter = passwordConditions.lowerCase[randomNumber(0, 25)];
      var upperCharacter = passwordConditions.upperCase[randomNumber(0, 25)];
      var numericCharacter = passwordConditions.numeric[randomNumber(0, 8)];
      var specialCharacter = passwordConditions.specialChars[randomNumber(0, 28)];

      //Random number to choose a random condition to be applied according to the users criteria
      var randomConditionOf4 = randomNumber(0, 3);
      var randomConditionOf3 = randomNumber(0, 2);
      var randomConditionOf2 = randomNumber(0, 1);

      //The user requieres all four password conditions
      if (lowerCaseConfirm && upperCaseConfirm && numeriConfirm && specialChars) {
        if (randomConditionOf4 === 0) {
          password += lowerCharacter;
        }
        else if (randomConditionOf4 === 1) {
          password += upperCharacter;
        }
        else if (randomConditionOf4 === 2) {
          password += numericCharacter;
        }
        else if (randomConditionOf4 === 3) {
          password += specialCharacter;
        }
      }

      //The user requieres three password conditions
      else if (lowerCaseConfirm && upperCaseConfirm && numeriConfirm) {
        if (randomConditionOf3 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf3 === 1) {
          password = password + upperCharacter;
        }
        else if (randomConditionOf3 === 2) {
          password = password + numericCharacter;
        }
      }
      else if (upperCaseConfirm && numeriConfirm && specialChars) {
        if (randomConditionOf3 === 0) {
          password = password + upperCharacter;
        }
        else if (randomConditionOf3 === 1) {
          password = password + numericCharacter;
        }
        else if (randomConditionOf3 === 2) {
          password = password + specialCharacter;
        }
      }
      else if (lowerCaseConfirm && numeriConfirm && specialChars) {
        if (randomConditionOf3 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf3 === 1) {
          password = password + numericCharacter;
        }
        else if (randomConditionOf3 === 2) {
          password = password + specialCharacter;
        }
      }
      else if (lowerCaseConfirm && upperCaseConfirm && specialChars) {
        if (randomConditionOf3 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf3 === 1) {
          password = password + upperCharacter;
        }
        else if (randomConditionOf3 === 2) {
          password = password + specialCharacter;
        }
      }

      //The user requieres two password conditions
      else if (lowerCaseConfirm && upperCaseConfirm) {
        if (randomConditionOf2 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + upperCharacter;
        }
      }
      else if (lowerCaseConfirm && numeriConfirm) {
        if (randomConditionOf2 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + numericCharacter;
        }
      }
      else if (lowerCaseConfirm && specialChars) {
        if (randomConditionOf2 === 0) {
          password = password + lowerCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + specialCharacter;
        }
      }
      else if (upperCaseConfirm && numeriConfirm) {
        if (randomConditionOf2 === 0) {
          password = password + upperCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + numericCharacter;
        }
      }
      else if (upperCaseConfirm && specialChars) {
        if (randomConditionOf2 === 0) {
          password = password + upperCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + specialCharacter;
        }
      }
      else if (numeriConfirm && specialChars) {
        if (randomConditionOf2 === 0) {
          password = password + numericCharacter;
        }
        else if (randomConditionOf2 === 1) {
          password = password + specialCharacter;
        }
      }

      //The user requieres one password condition
      else if (lowerCaseConfirm) {
        password = password + lowerCharacter;
      }
      else if (upperCaseConfirm) {
        password = password + upperCharacter;
      }
      else if (numeriConfirm) {
        password = password + numericCharacter;
      }
      else if (specialChars) {
        password = password + specialCharacter;
      }
    } //end for loop
    //checks that the user didn't provide enough information
    if (password == "") {
      window.alert("Not enough information provided. Try again.");
      }
    return password;
  } // end function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
