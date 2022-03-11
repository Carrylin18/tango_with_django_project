 <!--记得引入jquery.js-->    


      $("#sum").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();

        $.ajax({
            type:"POST",
            url:"/rango/ajax_add",
            data:{"a":a, "b":b},
            datatype:"json",
            success: function(ret){
                $('#result').html(ret.result)
             console.log(ret)
               alert('ok')
            },
            //调用出错执行的函数
            error: function(){
                //请求出错处理
            }     
        })
alert(3)
      });
