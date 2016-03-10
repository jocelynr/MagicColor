var colors = ["lightblue", "seagreen", "salmon", "pink", "blueviolet"];

var colorIndex = 0

$(document).ready(function(){
   $("#colorButton").click(function(){
      if (colorIndex == colors.length) {
         colorIndex = 0;
      }
      $("body").css("background-color",colors[colorIndex]); 
      colorIndex = colorIndex + 1;
      
      $("#myList").html("");
      for (var i = 0; i < colors.length; i = i +1) {
         console.log(colors[i]);
         $("#myList").append("<li>" + colors[i] + "</li>");
      }
   }); 
});
