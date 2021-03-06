$(function () {
    var baseURL = 'http://121.199.76.85:7788';
    var page = 1;
    var pageSize = 8;

    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    });

    // 封装一个请求数据函数
    function getData(method, url, fn) {
        $.ajax({
            url: url,
            method: method,
            success: fn
        })
    };



    // 请求所有的角色插入到下拉框中
    getData('get', baseURL + '/role/findAll', function (res) {
        res.data.forEach(function (item) {
            var newOp = $(`<option value="${item.id}">${item.name}</option>`);
            $('.one select').append(newOp);
        });
    });




    // 封装一个请求用户数据的函数
    function begcread(method, url) {
        // alert(url)
        $.ajax({
            url: url,
            method: method,
            success: function (res) {
                $('table tbody').empty();
                // 遍历
                res.data.list.forEach(function (item, index) {
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
                        <button data-item ='${JSON.stringify(item)}' class = 'setbtn btn btn-primary'>设置</button>
                        <button data-id = "${item.id}" class ='debtn btn btn-danger' >删除</button>
                        <button data-item ='${JSON.stringify(item)}' class = 'atbtn btn btn-info'>详情</button>
                        <button data-item ='${JSON.stringify(item)}' class = 'toUpdate btn btn-warning'>修改</button>
                        </td>
                </tr>`);
                    $('table tbody').append(newTr);
                });
            }
        });
    };
    begcread('get', baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize)




    // // 根据所有用户个数，设置分页按钮个数
    $.ajax({
        url: baseURL + '/baseUser/findAll',
        method: 'get',
        success: function (res) {
            // 获取长度
            var th = res.data.length;
            var num = Math.ceil(th / pageSize);
            for (var i = num; i > 0; i--) {
                $('.oneli').after(`<li class='currentnum'><a href="#">` + i + `</a></li>`)
            }
            // 设置分页（根据用户点击的当前分页按钮，重新查询当前页面的所有用户）
            $('.currentnum').click(function () {
                page = $(event.target).text();
                console.log(page)
                begcread('get', baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize);
            });
        },
    });






    // 给搜索按钮绑定事件
    $('.one .btntwo').click(function () {
        // 获取输入的值
        var username = $('.inputone').val();
        var rolename = $('.opselect option:selected').text();
        // alert(rolename);
        if (username == '' && rolename == '请选择角色') {
            url = baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize;
        } else if (username != '' && rolename == '请选择角色') {
            url = baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize + '&username=' + username;
        } else if (username == '' && rolename != '请选择角色') {
            url = baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize + '&rolename=' + rolename;
        } else {
            url = baseURL + '/baseUser/pageQuery?page=' + page + '&pageSize=' + pageSize + '&username=' + username + '&rolename=' + rolename;
        }
        begcread('get', url)
    });




    // 单个删除
    $('table tbody').on('click', '.debtn', function () {
        // 要获取到想要删除的数据id
        var id = $(this).attr('data-id');
        if (confirm('要删除数据吗')) {
            $.ajax({
                url: baseURL + '/baseUser/deleteById',
                method: 'get',
                data: { id: id },
                success: function (res) {
                    console.log(res);
                    $('.one .btntwo').click()
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    });



    // 修改
    $('table tbody').on('click', '.toUpdate', function () {
        // 获取数据
        user = $(this).attr('data-item');
        // 把user转化为json对象
        user = JSON.parse(user);
        $('input[name= username]').val(user.username);
        $('input[name= password]').val(user.password);
        $('input[name= realname]').val(user.realname);
        $('input[name= telephone]').val(user.telephone);
        $('input[type=radio][value=' + user.gender + ']').prop('checked', true);
        //设置模态框标题
        $('.dialog-header').html('修改用户信息')
        // 显示模态框
        $('.dialog').fadeIn();
    })





    // 新增用户
    $('.btnone').click(function () {
        // 先对模态框里面的数据进行清空
        user = null;
        //设置模态框标题
        $('.dialog-header').html('新增用户信息')
        // 清空数据
        username = $('input[name= username]').val('');
        password = $('input[name= password]').val('');
        realname = $('input[name= realname]').val('');
        telephone = $('input[name= telephone]').val('');
        gender = $('input[type=radio]').prop('checked', false);
        // 显示模态框
        $('.dialog').fadeIn();
    })

    // 对模态框的确认按键绑定请求事件
    $('.submit').click(function () {
        var username = $('input[name= username]').val();
        var password = $('input[name= password]').val();
        var realname = $('input[name= realname]').val();
        var telephone = $('input[name= telephone]').val();
        var gender = $('input[type=radio]:checked').val();
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


    // 绑定添加按钮的点击事件
    $('.btnone').click(function () {
        $('.dialog').fadeIn();
        $('.dialog-header').html('新增用户信息')

        // 清空表单数据
        username = $('input[name= username]').val('');
        password = $('input[name= password]').val('');
        realname = $('input[name= realname]').val('');
        telephone = $('input[name= telephone]').val('');
        gender = $('input[type=radio]').prop('checked', false);
        $('.dialog').fadeIn();
    });
    //取消，然后隐藏模态框
    $('.cancel').click(function () {
        $('.dialog').fadeOut();
    });


    // 给设置功能写上
    // 绑定设置按钮
    $('table tbody').on('click', '.setbtn', function () {
        // 显示模态框
        $('.dialogtwo').fadeIn();
        // 获取数据然后添加数据到模态框中
        user = $(this).attr('data-item');
        // 存储id
        localStorage.setItem('userid', user);
        // 把user转化为json对象
        user = JSON.parse(user);
        // 清空一下option
        $('.dialogtwo select').empty();
        getData('get', baseURL + '/role/findAll', function (res) {
            res.data.forEach(function (item) {
                var newOp = $(`<option value="${item.id}">${item.name}</option>`);
                $('.dialogtwo select').append(newOp);
            });
        });
        $('.userp').text(user.username);

    });


    // 给模态框的确认绑定事件
    $('.submittwo').click(function () {
        // 获取模态框的值 然后更新
        var username = $('.userp').text();
        // 获取选中的option的文本值
        var names = $('.dialogtwo select option:selected').text();
        // 获取id
        var ids = localStorage.getItem('userid');
        roles = ids.roles
        console.log(roles);
        id = JSON.parse(ids)
        id = id.id

        // 发起请求
        $.ajax({
            url: baseURL + '/baseUser/setRoles',
            method: 'post',
            data: {
                id: id,
            },
            success: function (res) {
                if (res.status == 200) {
                    alert('保存成功');
                    $('.dialogtwo').fadeOut();
                    $('.one .btntwo').click()
                }
            },
            error: function (err) {
                console.log(err);
            }
        });

    });




    //取消，然后隐藏模态框
    $('.canceltwo').click(function () {
        $('.dialogtwo').fadeOut();
    });


    // 给详情按钮绑定事件
    $('table tbody').on('click', '.atbtn', function () {
        // 获取数据然后存储到本地的localstorage中
        user = $(this).attr('data-item');
        // user = JSON.parse(user);
        localStorage.setItem('useradd', user);
        $('.content-main').load('./pages/user.html');
    });




});