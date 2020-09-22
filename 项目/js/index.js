
var baseURL = 'http://121.199.76.85:7788';
$.ajaxSetup({
    headers: {
        'Authorization': sessionStorage.getItem('token')
    }
});

$(function () {
    // 该按钮绑定事件
    $('button').click(function () {
        // 获取用户名和密码
        var username = $('input').eq(0).val();
        var password = $('input').eq(1).val();
        var obj = {
            username: username,
            password: password
        };
        // 表单验证
        if (username && password) {
            // 用户名密码非空
            // 发送请求
            $.ajax({
                url: baseURL + '/user/login',
                type: 'post',
                data: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function (res) {
                    //存储token
                    console.log(res);
                    sessionStorage.setItem('token', res.data.token);

                    // 成功之后对页面进行跳转
                    if (res.status === 200) {
                        var token = res.data.token;
                        if (token) {
                            $(location).attr("href", "./firstPg.html");
                        }
                    }
                    // window.location.href = './firstPg.html'
                },
            })
        } else {
            if (username == '', password == '') {
                alert('请输入账号和密码');
            }
        }
    });
});

