$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]checked").val();
    var question2 = $("input:radio[name=question2]checked").val();
    var question3 = $("input:radio[name=question3]checked").val();

    $("#result").show();

  });
});
