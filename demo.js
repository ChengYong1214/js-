/**
 * Created by DCY on 2020/6/30.
 */

/*1-时间字符串转换*/
function setStringDate(str){
    return new Date(str.replace(/-/g,"/"));
}
console.log(setStringDate('2020-06-15 10:10:12'));

/*2-获取url中的参数*/
function getParameter(str) {
    var query='http://www.demo.com/index.html?id=2&name=zhangsan&age=12';
    var queryParameter=query.substring(query.indexOf('?')+1,query.length);//获取所有参数字符串
    var parameters = queryParameter.split("&");//参数字符串转数组
    for (var i=0;i<parameters.length;i++) {
        var values = parameters[i].split("=");//获取参数的值
        if(values[0] == str){
            return values[1];
        }
    }
    return null;
}
console.log(getParameter('age'));

/*3-返回字符串长度，中文2个字符，英文1个字符*/
function getStringOfLength(str){
    if(str==null||str==''){//字符串不存在或为空判断
        return 0;
    }
    var len=str.length;//获取字符串长度
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {//判断是否为汉字
            len += 1
        }
    }
    return len;
}
console.log(getStringOfLength('a12g张三e'));

/*4-获取当前月份最大天数*/
function getMonthMaxDay(){
    var year=new Date().getYear();//获取当前年份
    var month=new Date().getMonth()+1;//获取当前月份，从0开始的
    return new Date(year,month,0).getDate();
}
console.log(getMonthMaxDay());

/*5-获取url中的参数值，解决中文乱码问题*/
function getParameterOrMessyCode(str){
    var query='http://www.demo.com/index.html?id=2&name=张三&age=12';
    var queryParameter=decodeURI(query).substring(query.indexOf('?')+1,query.length);//获取所有参数字符串
    var parameters = queryParameter.split("&");//参数字符串转数组
    for (var i=0;i<parameters.length;i++) {
        var values = parameters[i].split("=");//获取参数的值
        if(values[0] == str){
            return values[1];
        }
    }
    return null;
}
console.log(getParameterOrMessyCode('name'));

/*6-获取本地和服务器时间差*/


/*7-表单单个元素的验证*/
function FormOne(){
    $("#form1").validate().element($(".id1"))=='';//引入Jqery和validate的插件
}

/*8-表单元素验证*/
function FormTable(){
    $("#mgForm").validate({//引入Jqery和validate的插件
        rules: {//写入文本框中的限制条件
            username: { //指的是input中name的名字
                required: true,//不能为空
                minlength: 6,//最短为6个
                maxlength: 10//最长为10个
            },
            age: {
                required: true //不能为空
            },
            password: {
                required: true,//必填
                rangelength: [2, 6] //长度为2-6
            },
            password1: {
                equalTo: "#pass" //重置密码必须与#pass中的密码保持一致
            },
            email: {
                email: true  //email保证格式正确
            }
        },
        messages: {//提示信息
            username: { //用户名
                required: "*此项必填",
                minlength: "*用户名最小是6位",
                maxlength: "*用户名最大是10位"
            },
            age: {//年龄
                PostCode: "错误"
            },
            password: {//密码
                required: "*必填",
                rangelength: "2-6"
            },
            password1: {//重置密码
                equalTo: "*密码不一致"
            },
            email: {//邮箱格式
                email: "*邮箱格式不正确"
            }
        },
        submitHanfler: function () {//如果全部验证正确就弹出弹窗
            alert("全部通过")
        }
    });
}
