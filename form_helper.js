class FormHelper {
   static isEmail(txtValue) {
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(txtValue);
   }
 
   static isNumber(txtValue) {
     const theRegexp = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
     return String(txtValue).search(theRegexp) !== -1;
   }
 
   static isUsername(txtValue) {
     const theRegexp = /^[$A-Z_][0-9A-Z_$]*$/i;
     return theRegexp.test(txtValue);
   }
 
   static getRandomString(length = 20) {
     const charArray = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.";
     let thePassword = "";
     let pos = 0;
     let randomInt = 0;
     while (pos < length) {
       pos++;
       randomInt = Math.round(Math.random() * charArray.length);
       thePassword += charArray.charAt(randomInt);
     }
     return thePassword;
   }
 }
 
 export default FormHelper;
 