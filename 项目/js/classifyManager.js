$(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    });
    var user = null;
    var baseURL = 'http://121.199.76.85:7788';
    function getRole() {
        // 清空列表数据
        $('table tbody').empty();
        $.ajax({
            url: baseURL + '/category/findAll',
            method: 'get',

            success: function (res) {
                res.data.forEach(function (item, index) {
                    var newTr = $(`<tr>
                    <td>` + index + 1 + `</td>
                    <td>` + item.name + `</td>
                    <td>` + item.no + `</td>
                    <td>`+ item.parentId + `</td>
                    <td>` + item.description + `</td>
                    <td>
                    <button data-item ='${JSON.stringify(item)}' class='toUpdate btn btn-warning'>修改</button>
                    <button data-id='${item.id}' class='setdelete btn btn-danger'>删除</button>     
                    </td>
                    </tr>`)
                    $('table tbody').append(newTr);
                })

            }
        });
    };
    getRole();

    // 封装一个插入option的函数
    function getoption(method, url, fn) {
        $.ajax({
            url: url,
            method: method,

            success: fn
        })
    };



    // 新增用户
    $('.btnone').click(function () {
        // alert();
        // 先对模态框里面的数据进行清空
        user = null;
        $('.setuserify').empty();
        //设置模态框标题
        $('.dialog-header').html('新增栏目信息')
        // 清空数据
        // 发起请求吧数据插入到框中
        getoption('get', baseURL + '/category/findAll', function (res) {
            res.data.forEach(function (item) {
                var newOp = $(`<option class='opone' value="${item.id}" >` + item.name + `</option>`)
                $('.setuserify').append(newOp);
            });
        });
        name = $('.name').val('');
        no = $('.no').val('');
        description = $('.description').val('');
        // 显示模态框
        $('.dialog').fadeIn();
    })



    // 绑定修改按钮
    $('table tbody').on('click', '.toUpdate', function () {
        // 显示模态框
        $('.dialog').fadeIn();
        // 设置模态框的标题
        $('.dialog-header').html('修改栏目信息');
        // 获取角色的信息然后添加到模态框中
        user = $(this).attr('data-item');
        // 吧user转化为json对象
        user = JSON.parse(user);
        $('.setuserify').empty();
        getoption('get', baseURL + '/category/findAll', function (res) {
            res.data.forEach(function (item) {
                var newOp = $(`<option class='opone' value="${item.id}" >` + item.name + `</option>`)
                $('.setuserify').append(newOp);
            });
        });
        // 然后把数据放到模态框
        $('.name').val(user.name);
        $('.no').val(user.no);
        $('.setuserify').val(user.id);
        $('.description').val(user.description);

    });


    // 单个删除
    $('table tbody').on('click', '.setdelete', function () {
        // 获取id
        var ids = $(this).attr('data-id');
        // 发送请求
        if (confirm('要删除数据吗')) {
            $.ajax({
                url: baseURL + '/category/deleteById',
                method: 'get',
                data: {
                    id: ids
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
        var name = $('.name').val();
        var no = $('.no').val();
        var parentId = $('.setuserify option:selected').val();
        var description = $('.description').val();
        // 发送请求对数据进行更新或者修改
        $.ajax({
            url: baseURL + '/category/saveOrUpdate',
            method: 'post',
            data: {
                id: user ? user.id : '',
                name: name,
                no: no,
                description: description,
                parentId: parentId
            },

            success: function (res) {
                console.log(res);
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