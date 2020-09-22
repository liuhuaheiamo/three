$(function () {
    var baseURL = 'http://121.199.76.85:7788';
    // 切换页面
    $('nav>ul> li').click(function () {
        var text = $(this).text();
        // 设置标题文本
        $('.header-title').html(text);
        // alert(text)
        if (text == '系统首页') {
            $('.content-main').load('./pages/home.html')
        };
        if (text == '角色权限') {
            $('.content-main').load('./pages/roleManager.html')
        };
        if (text == '分类管理') {
            $('.content-main').load('./pages/classifyManager.html')
        };
        if (text == '资讯管理') {
            $('.content-main').load('./pages/messageManager.html')
        };
        if (text == '评论管理') {
            $('.content-main').load('./pages/commentManager.html')
        };
        if (text == '个人信息') {
            $('.content-main').load('./pages/user.html')
        };
    });
    $('nav>ul> li:first').click();




    // 该按钮绑定事件
    $('.container-left li').eq(1).click(function () {
        // 获取用户的信息
        $.ajax({
            url: baseURL + '/baseUser/cascadeRoleFindAll',
            type: 'get',
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success: function (res) {

                // 清空数据
                $('table tbody').empty();
                // 遍历
                res.data.forEach(function (item, index) {
                    var newTr = $(`<tr>
            <td>
                <input type="checkbox" value = "$(item.imgDiv)">
            </td>
            <td>${index + 1}</td>
            <td>${item.username}</td>
            <td>${item.realname}</td>
            <td>${item.roles.map(function (it) {
                        return it.name
                    }).join()}</td>
            <td>${item.gender === 'male' ? '男' : '女'}</td>
            <td>${item.status}</td>
            <td>${item.telephone}</td>
            <td>
                <button data-id = "${item.id}" class ='setbtn'>设置</button>
                <button data-id = "${item.id}" class ='debtn' >移除</button>
                <button data-id = "${item.id}" class = 'atbtn'>详情</button>
                <button data-item ='${JSON.stringify(item)}' class = 'toUpdate'>修改</button>
                </td>
        </tr>`);
                    $('table tbody').append(newTr);
                });
            }
        });
    });













    // 设置分页（根据用户点击的当前分页按钮，重新查询当前页面的所有用户
    // $('.active').click(function () {
    //     // 获取点击的内容
    //     // 发起请求
    //     $.ajax({
    //         url: baseURL + '',
    //         method: 'get',
    //         headers: {
    //             'Authorization': sessionStorage.getItem('token')
    //         },
    //         success: function () {

    //         },
    //     });
    // });



    // 根据用户输入内容查询数据
    // 获取用户输入
    // var result = $('useradd').val();
    // $.ajax({
    //     url: baseURL + '/baseUser/cascadeRoleFindAll',
    //     method: 'get',
    //     headers: {
    //         'Authorization': sessionStorage.getItem('token')
    //     },
    //     success: function () {
    //         // if()
    //     },
    // });



    // 给详情按钮绑定事件





    // 给添加按钮绑定事件




    // 给莫泰框中的确定按钮绑定事件
});