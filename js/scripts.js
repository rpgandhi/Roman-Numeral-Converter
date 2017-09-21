//
// $(document).ready(function() {
//   $("#romanForm").submit(function(event){
//     //var numbers=["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"]
//     var numberOne= "1"
//     var input= $("input#numberInput").val();
//     //var one= input.replace("1","I");
//     for (var i = 0; i <= input.length; i++) {
//       if (numberOne.includes(input.charAt(i))) {
//         return true;
//         alert("working");
//       //var inputPosition = input.charAt(i);
//       //var oneReplace = input.replace("inputPosition", "I");
//     }
//   }
//     //$("#output").show();
//     //$("#output1").text(one);
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#romanForm").submit(function(event){
    //var numbers=["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"]
    var input= $("input#numberInput").val();
    //var numberOne= "1"
    if (input.length === 1) {
      var oneReplace = input.replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX");

      $("#output").show();
      $("#output1").text(oneReplace);

    }
    if (input.length === 2) {
      var tenReplace = input.charAt(0).replace("1", "X").replace("2", "XX").replace("3", "XXX").replace("4", "XL").replace("5", "L").replace("6", "LX").replace("7", "LXX").replace("8", "LXXX").replace("9", "XC");
      var ten2Replace = input.charAt(1).replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX");

      $("#output").show();
      $("#output1").text(tenReplace + ten2Replace);
    }
    if (input.length === 3) {
      var hundredReplace = input.chartAt(0).replace("1", "C").replace("2", "CC").replace("3", "CCC").replace("4", "CD").replace("5","D").replace("6", "DC").replace("7", "DCC").replace("8", "DCCC").replace("9" , "CM");
      var hundred2Replace = input.charAt(1).replace("1", "X").replace("2", "XX").replace("3", "XXX").replace("4", "XL").replace("5", "L").replace("6", "LX").replace("7", "LXX").replace("8", "LXXX").replace("9", "XC");
      var hundred3Replace = input.charAt(2).replace(/1/g, "I").replace(/2/g, "II").replace(/3/g,"III").replace(/4/g, "IV").replace(/5/g, "V").replace(/6/g, "VI").replace(/7/g, "VII").replace(/8/g, "VIII").replace(/9/g, "IX");

      $("#output").show();
      $("#output1").text(hundredReplace + hundred2Replace + hundred3Replace);
    }


    //var oneReplace = input.replace(/1/g, "I").replace(/5/g, "V");
    //var fiveReplace = input.replace(/5/g, "V");

    //
    // $("#output").show();
    // $("#output1").text(oneReplace);

    event.preventDefault();
  });
});
