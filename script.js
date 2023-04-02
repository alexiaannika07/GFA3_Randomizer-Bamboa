var num1, num2, num3;

function generateNumbers() {
  num1 = Math.ceil(Math.random() * 20);
  num2 = Math.ceil(Math.random() * 20);
  num3 = Math.ceil(Math.random() * 20);

  var greatestNumber = num1; 
  if (greatestNumber = num1){
    document.getElementById("results").innerHTML = "Biology core has the most number of students with " + greatestNumber;
  }
  if (num2 > greatestNumber) {
    greatestNumber = num2;
    document.getElementById("results").innerHTML = "Chemistry core has the most number of students with " + greatestNumber;}
  if (num3 > greatestNumber) {
    greatestNumber = num3;
    document.getElementById("results").innerHTML = "Physics core has the most number of students with  " + greatestNumber;}

  document.getElementById("Biology").innerHTML = num1;
  document.getElementById("Chemistry").innerHTML = num2;
  document.getElementById("Physics").innerHTML = num3;
}
generateNumbers();

function generateLetter() {
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      var randomLetter = alphabet.charAt(randomIndex);
      document.getElementById("alphabet").innerHTML = randomLetter;
    }
generateLetter();

function convertToHoursAndMinutes() {
      var totalMinutes = num2 * num3;
      document.getElementById("minute").innerHTML = totalMinutes;

      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;

      document.getElementById("time").innerHTML = hours + " hour(s) and " + minutes + " minute(s)";
    }
convertToHoursAndMinutes();