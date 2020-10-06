$(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    });
    var baseURL = 'http://121.199.76.85:7788';
    // 获取本地的localStorage数据·
    var user = localStorage.getItem('adduser');
    user = JSON.parse(user);



    // 发起ajax请求获取数据添加到select中
    // 请求所有的角色插入到下拉框中
    $.ajax({
        url: baseURL + '/category/findAll',
        method: 'get',
        success: function (res) {
            res.data.forEach(function (item) {
                var newOp = $(`<option value="${item.id}">${item.name}</option>`);
                $('.addselect').append(newOp);
            });
        }
    });





    $('.backbtn').click(function () {
        $('.content-main').load('./pages/messageManager.html')
    })


    // 绑定发布按钮
    $('.gobtn').click(function () {
        // 获取数据
        var title = $('.titleadd').val();
        var content = $('.contentadd').text()
        var categoryId = $('.addselect option:selected').val();
        $.ajax({
            url: baseURL + '/article/saveOrUpdate',
            method: 'post',
            data: {
                id: user ? user.id : '',
                title: title,
                content: content,
                categoryId: categoryId
            },
            success: function () {
                if (user == '') {
                    confirm('发布成功')
                    $('.content-main').load('./pages/messageManager.html')
                } else {
                    confirm('修改成功')
                    $('.content-main').load('./pages/messageManager.html')
                }

            }

        });
    });

    if (user != null) {
        $('.titleadd').val(user.title);
        $('.contentadd').text(user.content)
        $('.addselect option:selected').val(user.categoryId);
        localStorage.clear('adduser');
    } else {
        $('.titleadd').val('');
        $('.contentadd').text('')
        $('.addselect option:selected').val('');
    }

});