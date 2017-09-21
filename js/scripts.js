function oneFunction(input){
  console.log(input);
  var oneReplace = input.replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX");
  return oneReplace
}


$(document).ready(function() {

  $("#romanForm").submit(function(event){
    var input= $("input#numberInput").val();
    if (input.length === 1) {
      var oneReplace = oneFunction(input);
      $("#output").show();
      $("#output1").text(oneReplace);

    }
    if (input.length === 2) {
      var tenReplace = input.charAt(0).replace("1", "X").replace("2", "XX").replace("3", "XXX").replace("4", "XL").replace("5", "L").replace("6", "LX").replace("7", "LXX").replace("8", "LXXX").replace("9", "XC");
      var ten2Replace = input.charAt(1).replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX").replace(/0/g, "");

      $("#output").show();
      $("#output1").text(tenReplace + ten2Replace);
    }
    if (input.length === 3) {

      var hundredReplace = input.charAt(0).replace("1", "C").replace("2", "CC").replace("3", "CCC").replace("4", "CD").replace("5","D").replace("6", "DC").replace("7","DCC").replace("8", "DCCC").replace("9","CM");
      var hundred2Replace = input.charAt(1).replace("1", "X").replace("2", "XX").replace("3", "XXX").replace("4", "XL").replace("5", "L").replace("6", "LX").replace("7", "LXX").replace("8", "LXXX").replace("9", "XC").replace(/0/g, "");
      var hundred3Replace = input.charAt(2).replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX").replace(/0/g, "");

      $("#output").show();
      $("#output1").text(hundredReplace + hundred2Replace + hundred3Replace);
    }


      if (input.length === 4 && input <= 4999) {
      var thousandReplace =  input.charAt(0).replace("1","M").replace("2","MM").replace("3","MMM").replace("4","MMMM");
      var thousand2Replace = input.charAt(1).replace("1", "C").replace("2", "CC").replace("3", "CCC").replace("4", "CD").replace("5","D").replace("6", "DC").replace("7","DCC").replace("8", "DCCC").replace("9","CM").replace(/0/g, "");
      var thousand3Replace = input.charAt(2).replace("1", "X").replace("2", "XX").replace("3", "XXX").replace("4", "XL").replace("5", "L").replace("6", "LX").replace("7", "LXX").replace("8", "LXXX").replace("9", "XC").replace(/0/g, "");
      var thousand4Replace = input.charAt(3).replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX").replace(/0/g, "");

      $("#output").show();
      $("#output1").text(thousandReplace + thousand2Replace + thousand3Replace + thousand4Replace);

    } else if (input > 4999) {
    alert("Roman numerals end at 4,999. Please enter a lower number.");
  }



    event.preventDefault();
  });
});
