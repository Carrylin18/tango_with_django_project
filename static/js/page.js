//一下数据为模拟集合个人理解js中的集合就是将对象放进数组

var strss=categories

var strs = [
 {
 "id":123,
 "pwd":456
 },
 {
 "id":456,
 "pwd":123
 },
 {
 "id":4681,
 "pwd":9815
 },
 {
 "id":471,
 "pwd":4981
 },
 {
 "id":1234789,
 "pwd":156
 },
 {
 "id":789,
 "pwd":158
 },
 {
 "id":"vgwh",
 "pwd":"vgsya"
 },
 {
 "id":1,
 "pwd":"tcv"
 },
 {
 "id":256,
 "pwd":"vtc0"
 }
];
//假设规定每页显示长度为3
var len = 3;
//确认该集合会被分成几页分成几页就代表需要几个页面按钮,封装封装方便多次运用
function limits(){
 var countLim = Math.ceil(strs.length/len);//余数也算是一页这里用向上取整
 //确认页面按钮个数进行循环显示到页面上
 document.getElementById("inputs").innerHTML='';//清空一下
 for(var i=1;i<=countLim;i++){
 document.getElementById("inputs").innerHTML+='<input type="button" value="'+i+'" onclick="limitinput(this)"/>';//每个页面按钮都绑定上一个点击事件
 }
}
var choose = 0;//创建一个全局变量用来保存当前处于第几个页面
//点击按钮获取当前按钮的值进行选择当前table是第几页数据
function limitinput(ids){
 choose = ids.value;
 tablestr(choose);//刷新table数据
 limits();//刷新页面按钮
  ids.style.backgroundColor='red';//当前点击的页面按钮背景颜色改变为红色
 liminputcolor(choose);//页面按钮变色
}
//通过当前页面按钮和页面数据长度将数据放进table内封装封装！！！必须封装
function tablestr(num){//num是指当前哪个页面
 var num1 = (num-1)*len;//确定循环开始的集合下标
 var num2 = num*len;//确定循环结束的结束下标
 document.getElementById("table").innerHTML='';//清空一下
 for(var i=num1;i<num2;i++){//遍历数组
 var str = '';
 for(var h in strs[i]){//遍历集合
  str+='<td>'+strs[i][h]+'</td>';
 }
 document.getElementById("table").innerHTML+='<tr>'+str+'</tr>';//每循环一次添加一条数据
 }
}
function liminputcolor(choose){
 document.getElementById("inputs").childNodes[choose-1].style.backgroundColor="red";
}
//初始化当前页面显示为第一页
limits();//页面按钮生成
document.getElementById("inputs").childNodes[0].style.backgroundColor="red";//第一个按钮的背景颜色为红色
tablestr(1);//table数据显示