$(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': sessionStorage.getItem('token')

        }
    });
    var baseURL = 'http://121.199.76.85:7788';
    function getData() {

        $('table tbody').empty();
        $.ajax({
            url: baseURL + '/privilege/findPrivilegeTree',
            method: 'get',
            success: function (res) {
                console.log(res);
                res.data.forEach(function (item) {
                    var newTr = $(`<tr>
                    <td>${item.name}</td>
                    <td>${item.route}</td>
                    <td>${item.type}</td>
                    <td>${item.num}</td>
                    <td>${item.icon}</td>
                    <td>${item.description}</td>
                    <td>
                    <button data-id='${item.id}' class='setdelect  btn btn-danger'>删除</button>
                    <button data-item='${JSON.stringify(item)}' class='updata btn btn-warning'>修改</button>
                    </td>
                </tr>`)

                    $('table tbody').append(newTr);
                });

            }
        });


        // $.ajax({
        //     url: baseURL + '/privilege/findAll',
        //     method: 'get',
        //     success: function (res) {

        //         res.data.forEach(function (item) {
        //             var newTr = $(`<tr>
        //             <td>${item.name}</td>
        //             <td>${item.route}</td>
        //             <td>${item.type}</td>
        //             <td>${item.num}</td>
        //             <td>${item.icon}</td>
        //             <td>${item.hidden}</td>
        //             <td>
        //             <button>删除</button>
        //             <button>修改</button>
        //             </td>
        //         </tr>`)
        //             var parentIds = item.parentId
        //             if (parentIds = 33) {
        //                 // 筛选出parentid为这个id的数据
        //                 $('table tbody').eq(0).append(newTr);
        //             }

        //         });

        //     }
        // });
    };
    getData();



    // 通过id删除
    $('table tbody').on('click', '.setdelect', function () {
        // 获取id数据
        var ids = $(this).attr('data-id')
        $.ajax({
            url: baseURL + '/privilege/deleteById',
            method: 'get',
            data: {
                id: ids,
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
    });


    // 修改数据

    $('table tbody').on('click', '.updata', function () {
        $('.dialog').fadeIn();
        $('.dialog-header').html('修改权限');
        var user = $(this).attr('data-item')
        user = JSON.parse(user);
        $('.name').val(user.name);
        $('.route').val(user.route);
        $('.num').val(user.num);;
        $('.hidden').val(user.hidden);

        $.ajax({
            url: baseURL + '/privilege/findPrivilegeTree',
            method: 'post',
            success: function (res) {
                res.data.forEach(function (item) {
                    var op = $(` <option value="">` + item.name + `</option>`)
                    $('.type').append(op);
                });
            }
        });
    })



    $('.cancel').click(function () {
        $('.dialog').fadeOut();
    });
});