 // YAN - Yet another network using node.js
/** form_helper.js 
 * this file has all form validation routines and other utility function 
 */

/** function isEmail(value) 
   checks if the passed expression is an email 
*/
exports.isEmail=function EmailValidation(txtValue){  
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
   return emailPattern.test(txtValue);  
} 

/** function isNumber(value) 
   checks if the passed expression is a number 
*/
exports.isNumber=function NumberValidation(txtValue) {
   var theRegexp=/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
   return String(txtValue).search (theRegexp) != -1
}

/** function isUsername(value) 
   checks if the passed expression is a valid username 
*/
exports.isUsername=function UserValidation(txtValue) {
   var theRegexp=/^[$A-Z_][0-9A-Z_$]*$/i;;
   return theRegexp.test (txtValue);
}

/** function getRandomString(value) 
   returns a random string to output with email for user confirmation 
*/

exports.getRandomString=function GenerateRandomString(length)
{
  if(!length) length=20;
  
  var charArray = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.",
	  thePassword = "",
	  pos=0,
	  randomInt=0;		  
  while(pos<length) {
	  pos++;
	  randomInt = Math.round(Math.random() * charArray.length);
	  thePassword += charArray.charAt(randomInt);
  }
  return thePassword ;
}

