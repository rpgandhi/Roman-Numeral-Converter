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

    //var numberOne= "1"

    var input= $("input#numberInput").val();

    var inputReplace = input.replace(/1/g, " I");


    $("#output").show();
    $("#output1").text(inputReplace);

    event.preventDefault();
  });
});
