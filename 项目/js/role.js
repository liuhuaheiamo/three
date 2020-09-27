$(function () {
    var baseURL = 'http://121.199.76.85:7788';
    function getRole() {
        // 清空列表数据
        $('table tbody').empty();
        $.ajax({
            url: baseURL + '/role/findAll',
            method: 'get',
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success: function (res) {
                res.data.forEach(function (item, index) {
                    var newTr = $(`<tr>
                    <td>` + index + 1 + `</td>
                    <td>` + item.name + `</td>
                    <td>
                    <button data-id='${item.id}' class='setdelete btn btn-danger'>删除</button>
                    <button class='btn btn-primary'>授权</button>
                    <button data-item ='${JSON.stringify(item)}' class='toUpdate btn btn-warning'>修改</button>
                    </td>
                    </tr>`)
                    $('table tbody').append(newTr);
                })

            }
        });
    };
    getRole();


    // 绑定修改按钮
    $('table tbody').on('click', '.toUpdate', function () {
        // 显示模态框
        $('.dialog').fadeIn();
        // 设置模态框的标题
        $('.dialog-header').html = '修改信息'
        // 获取角色的信息然后添加到模态框中
        var user = $(this).attr('data-item');
        // console.log(user);
        // 吧user转化为json对象
        user = JSON.parse(user);
        // console.log(user);
        // 然后把数据放到模态框中
        $('.upuser').val(user.name);



    });

    // 单个删除
    $('table tbody').on('click', '.setdelete', function () {
        // 获取id
        var ids = $(this).attr('data-id');
        // 发送请求
        if (confirm('是否删除数据')) {
            $.ajax({
                url: baseURL + '/role/deleteById',
                method: 'get',
                data: {
                    id: ids
                },
                headers: {
                    'Authorization': sessionStorage.getItem('token')
                },
                success: function (res) {
                    if (res.status == 200) {
                        alert('删除成功');
                        getRole();
                    }
                },
                error: function () {
                    alert('删除失败');
                }
            });
        }

    });




    // 给模态框的的确认按钮绑定事件
    $('.submit').click(function () {
        var name = $('.upuser').val();

        // 发送请求对数据进行更新或者修改
        $.ajax({
            url: baseURL + '/role/saveOrUpdate',
            method: 'post',
            data: {
                name: name
            },
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success: function (res) {
                if (res.status == 200) {
                    alert('保存成功');
                    // 更新一下列表
                    getRole();
                    // 隐藏模态框
                    $('.dialog').fadeOut();
                }
            },
            error: function () {
                alert('请求更新失败');
            }
        });

    });


    // 给模态框的取消绑定事件
    $('.cancel').click(function () {
        // 隐藏模态框
        $('.dialog').fadeOut();
    });
});