$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var answer1 = (question1+question2+question3);
    if (answer1 ==="googleenterpmoblie" ){
      $("#career").show();
      $("#career1").hide();
      $("#career2").hide();
      $("form#quiz").submit();
    }else if (answer1 ==="microsoftbusinessdesktop"){
      $("#career2").show();
      $("#career").hide();
      $("#career1").hide();
      $("form#quiz").submit();
    }else if (answer1 ==="newrelicstartweb"){
      $("#career1").show();
      $("#career").hide();
      $("#career2").hide();
      $("form#quiz").submit();
    }else {
     $("form#quiz").submit();
    }
  });
});
