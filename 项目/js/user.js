$(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    });
    var baseURL = 'http://121.199.76.85:7788';

    // 获取本地数据localStorage
    var user = localStorage.getItem('useradd');
    user = JSON.parse(user)
    // 把时间戳转换为正常时间
    function formatDate(now) {
        //取得4位数的年份
        var year = now.getFullYear();
        //取得日期中的月份，其中0表示1月，11表示12月  
        var month = now.getMonth() + 1;
        //返回日期月份中的天数（1到31） 
        var date = now.getDate();
        return year + "-" + month + "-" + date;
    }
    // 判断执行哪个事件
    if (user != null) {
        $('.username').text(user.username);
        $('.realname').text(user.realname);
        $('.telephone').text(user.telephone);
        $('.gender').text(user.gender === 'male' ? '男' : '女');
        $('.registerTime').text(formatDate(new Date(user.registerTime)));
        $('.status').text(user.status);
        // 清除本地的localStorage
        localStorage.clear();
    } else {
        //    把数据放入页面
        // 发起ajax请求，获取数据
        $.ajax({
            url: baseURL + '/baseUser/findAll',
            method: 'get',
            success: function (res) {
                // 通过id把管理员的信息获取到
                res.data.forEach(function (item) {
                    if (item.id == 5) {
                        $('.username').text(item.username);
                        $('.realname').text(item.realname);
                        $('.telephone').text(item.telephone);
                        $('.gender').text(item.gender === 'male' ? '男' : '女');
                        $('.registerTime').text(formatDate(new Date(item.registerTime)));
                        $('.status').text(item.status);
                    }
                })
            }
        })
    }


    // 绑定修改按钮
    $('.userdata .setbtn').click(function () {
        //   弹出模态框
        $('.dialog').fadeIn();
        // 获取点击数据把数据放到模态框中
        if (user != null) {
            $('.dialog .username').val(user.username);
            $('.dialog .password').val(user.password);
            $('.dialog .realname').val(user.realname);
            $('.dialog .telephone').val(user.telephone);
            $('.dialog .gender[value=' + user.gender + ']').prop('checked', true);
        } else {
            // 获取数据
            $.ajax({
                url: baseURL + '/baseUser/findAll',
                method: 'get',
                success: function (res) {
                    // 通过id把管理员的信息获取到
                    res.data.forEach(function (item) {
                        if (item.id == 5) {
                            $('.dialog .username').val(item.username);
                            $('.dialog .password').val(item.password);
                            $('.dialog .realname').val(item.realname);
                            $('.dialog .telephone').val(item.telephone);
                            $('.dialog .gender[value=' + item.gender + ']').prop('checked', true);
                        }
                    })
                }
            })

        }

    });


    // 模态框确认按钮绑定事件
    $('.submit').click(function () {
        var username = $('.dialog .username').val();
        var password = $('.dialog .password').val();
        var realname = $('.dialog .realname').val();
        var telephone = $('.dialog .telephone').val();
        var gender = $('.dialog .gender:checked').val();
        // 然后访问后台接口，对数据进行更新
        $.ajax({
            url: baseURL + '/baseUser/saveOrUpdate',
            method: 'post',
            data: {
                id: user ? user.id : '',
                username: username,
                password: password,
                realname: realname,
                telephone: telephone,
                gender: gender
            },
            success: function (res) {
                if (res.status == 200) {
                    alert('保存成功');
                    $('.dialog').fadeOut();
                    $('.one .btntwo').click()
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    });



    // 给模态框的取消绑定事件
    $('.cancel').click(function () {
        // 隐藏模态框
        $('.dialog').fadeOut();
    });
})