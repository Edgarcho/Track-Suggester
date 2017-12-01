$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var result;
    if (question1 === "google" && question2 === "enterp" && question3 ==="moblie"){
      $("#career").show();
      $("#career1").hide();
      $("#career2").hide();

    }else {
      $("#career1").show();
      $("#career").hide();
      $("#career2").hide();

    }



  });
});
