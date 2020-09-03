//完成导航绑定
$(function () {
    //绑定事件
    $('body>nav li').click(function () {
        //
        console.log($(this).text());
        var text = $(this).text();
        if (text === '栏目管理') {
            // 右侧内容区加载栏目管理页面
            $('body>article>section').load('./pages/category.html')
        }
        if (text === '课程管理') {
            // 右侧内容区加载栏目管理页面
            $('body>article>section').load('./pages/course.html')
        }
        if (text === '用户管理') {
            // 右侧内容区加载栏目管理页面
            $('body>article>section').load('/6-jQuery&h5api/day01/3-ajax.html')
        }
    });
    $('body>nav li:first').trigger('click'
    );
});