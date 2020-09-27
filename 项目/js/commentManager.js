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



    // 请求所有的角色插入到下拉框
    getData('get', baseURL + '/comment/pageQuery?page=' + page + '&pageSize=' + pageSize, function (res) {
        res.data.list.forEach(function (item) {
            var newOp = $(`<option value="${item.id}">${item.status}</option>`);
            $('.commentselect').append(newOp);
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
                    <td>${index + 1}</td>
                    <td>${item.content}</td>
                    <td>${item.commentTime}</td>
                    <td>${item.status}</td> 
                    <td>
                        <button data-id = "${item.id}" class ='debtn btn btn-danger' >删除</button>
                        <button data-item ='${JSON.stringify(item)}' class = 'yesbtn btn btn-info'>通过</button>
                        <button data-item ='${JSON.stringify(item)}' class = 'nobtn btn btn-warning'>不通过</button>
                        </td>
                </tr>`);
                    $('table tbody').append(newTr);
                });
            }
        });
    };
    begcread('get', baseURL + '/comment/pageQuery?page=' + page + '&pageSize=' + pageSize)




    // 给搜索按钮绑定事件
    $('.onecomment .btntwo').click(function () {
        // 获取输入的值
        var keywords = $('.inputone').val();
        // alert(keywords);
        if (keywords == '请选择') {
            url = baseURL + '/comment/pageQuery?page=' + page + '&pageSize=' + pageSize;
        } else {
            url = baseURL + '/comment/pageQuery?page=' + page + '&pageSize=' + pageSize + '&keywords=' + keywords;
        }
        begcread('get', url)
    });


    // 审核评论
    $('table tbody').on('click', '.yesbtn', function () {
        // 获取输入的值
        var status = $(this).attr('data-item');
        status = JSON.parse(status);
        // console.log(status.id);
        // alert(keywords);
        if (status.status == '审核未通过') {
            //    发起请求 通知后台给通过
            // console.log(baseURL)
            $.ajax({
                url: baseURL + '/comment/check?id=' + status.id + '&status=' + '审核通过',
                method: 'get',
                success: function () {
                    // 模拟点击触发  作用数局部刷新
                    $('.onecomment .btntwo').click();
                }
            });
        }
        begcread('get', url)
    });





    // 单个删除
    $('table tbody').on('click', '.debtn', function () {
        // 获取id
        var ids = $(this).attr('data-id');
        // 发送请求
        if (confirm('要删除数据吗')) {
            $.ajax({
                url: baseURL + '/comment/deleteById',
                method: 'get',
                data: {
                    id: ids
                },
                success: function (res) {
                    if (res.status == 200) {
                        alert('删除成功');
                        // 模拟点击触发  作用数局部刷新
                        $('.onecomment .btntwo').click();
                    }
                },
                error: function () {
                    alert('删除失败');
                }
            });
        }

    });

});