$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var result = (question1+question2+question3+question4+question5);
    if (result >= 30){
      $("#cnet").hide();
      $("#java").hide();
      $("#ruby").show();
    }else if (result >= 20){
      $("#cnet").hide();
      $("#ruby").hide();
      $("#java").show();
    }else if (result >= 5){
      $("#ruby").hide();
      $("#java").hide();
      $("#cnet").show();
    }else{
     alert("Not so fast, anwser all the question");
    }
  });
});
