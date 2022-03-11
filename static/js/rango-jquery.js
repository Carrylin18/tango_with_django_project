
$(document).ready(function() {

    $('#about-btn').click(function() {
        alert("You clicked the button using JQuery!");
    });

$('#submit').click(function() {
        var username=document.getElementById('username')
        var usernametext = username.value
        if(!usernametext){
       usernameSpan="Enter the username!"
        $('#usernameSpan').html(usernameSpan) }
      else{ $('#usernameSpan').html('')  }

  var password=document.getElementById('password')
        var passwordtext = password.value
        if(!passwordtext){
       passwordSpan="Enter the password!"
        $('#passwordSpan').html(passwordSpan) }
      else{ $('#passwordSpan').html('')  }
    });

    $('p').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        });
    
    $('#about-btn').click(function() {
        msgStr = $('#msg').html();
        msgStr = msgStr + " ooo, fancy!";

        $('#msg').html(msgStr);
    })

  $('#index-btn').click(function() {
        msgStr = $('#cate').html();
        msgStr = msgStr + " ooo, fancy!";

        $('#cate').html(msgStr);
    })
})