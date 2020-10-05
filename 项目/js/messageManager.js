$(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    });


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
    var baseURL = 'http://121.199.76.85:7788';
    function setdata() {
        // 发起ajax请求获取数据放入页面
        // 先清空页面数据
        $('table tbody').empty();
        $.ajax({
            url: baseURL + '/article/findAll',
            method: 'get',
            success: function (res) {
                res.data.forEach(function (item, index) {
                    newtr = $(`<tr>
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td>${formatDate(new Date(item.publishTime))}</td>
                <td>${item.categoryId === 4 ? '通知公告' : '校园新闻'}</td>
                <td>
                    <button data-item ='${JSON.stringify(item)}' class = 'setbtn btn btn-primary'>查看</button>
                    <button data-item ='${JSON.stringify(item)}' class = 'toUpdate btn btn-warning'>修改</button>
                    <button data-id = "${item.id}" class ='debtn btn btn-danger' >删除</button>
                    </td>
            </tr>`)
                    $('table tbody').append(newtr);
                });
            }
        });
    }
    setdata();

    // 单个删除
    $('table tbody').on('click', '.debtn', function () {
        // 要获取到想要删除的数据id
        var id = $(this).attr('data-id');
        if (confirm('要删除数据吗')) {
            $.ajax({
                url: baseURL + '/article/deleteById',
                method: 'get',
                data: { id: id },
                success: function (res) {
                    setdata();
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    });


    // 绑定发布资讯按钮
    $('.setdatabtn').click(function () {
        // 加载发布页面
        $('.content-main').load('./pages/addmessageManager.html')
    });


});