$(function () {
    var baseURL = 'http://121.199.76.85:7788';
    // 请求所有的角色插入到下拉框中
    $.ajax({
        url: baseURL + '/role/findAll',
        method: 'get',
        headers: {
            'Authorization': sessionStorage.getItem('token')
        },
        success: function (res) {

            // 遍历
            // $('.one select').empty();
            res.data.forEach(function (item) {
                var newOp = $(`<option value="${item.id}">${item.name}</option>`);
                $('.one select').append(newOp);
            });
        },
    });



    // // // 封装一个函数
    // 写死页面为一页面，页面展示十行数据
    var page = 1;
    var pageSize = 10;
    var username = $(".inputone").val();
    var rolename = $(".optionone").val();
    function begcread() {
        $.ajax({
            url: baseURL + '/baseUser/pageQuery',
            method: 'get',
            data: { page, pageSize, username, rolename },
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            success: function (res) {
                console.log(res);
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
                    <button data-id = "${item.id}" class = 'setbtn'>设置</button>
                    <button data-id = "${item.id}" class ='debtn' >移除</button>
                    <button data-id = "${item.id}" class = 'atbtn'>详情</button>
                    <button data-item ='${JSON.stringify(item)}' class = 'toUpdate'>修改</button>
                    </td>
            </tr>`);
                    $('table tbody').append(newTr);
                });
            }
        });
    };
    begcread();



    // // 根据所有用户个数，设置分页按钮个数
    $.ajax({
        url: baseURL + '/baseUser/findAll',
        method: 'get',
        headers: {
            'Authorization': sessionStorage.getItem('token')
        },
        success: function (res) {
            var th = res.length;
            console.log(th);
            var num = Math.ceil(th / pageSize);
            console.log(pageSize);
            console.log(res.length);
            for (var i = 0; i < num; i++) {
                $('.pagination').after(`<li class="currentnum"><a href="#">` + i + 1 + `</a></li>`)
            }
        },
    });




    // 设置分页（根据用户点击的当前分页按钮，重新查询当前页面的所有用户）
    $('.currentnum').click(function () {
        //1.获取点击内容-》currentPage

        //发送请求
        $.ajax({
            url: baseURL + '/baseUser/findAll',
            method: 'get',
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

});