$(function () {
    $('.header-user').click(function () {
        // $(location).attr("href", "/项目/index.html");
        window.location.href = './index.html';
        // 清除token
        sessionStorage.clear();
    });
});
