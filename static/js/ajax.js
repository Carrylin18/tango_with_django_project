 
    $('.btn').click(function(){
      $.ajax({
        url:'/rango/ajax',
        type:'get',
        success:function(data){
          $('.content').html(data)
        }
      })
    })