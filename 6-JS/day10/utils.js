//
//  1 提供登录方法  提供获取token方法
// user = {username:'',password:''}
var qs = Qs;
var baseURL = 'http://121.199.76.85:7788/user/login';
function login(user) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', baseURL + ' / user / login');
    //设置请求头部
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(user));
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var res = httpRequest.responseText;
            //json字符串转对象
            var token = JSON.parse(res).data.token;
            //保存到sessStorage中
            sessionStorage.setItem('token', token);
        };
        if (httpRequest.readyState === 4 && httpRequest.status === 500) {
            console.log('错误', httpRequest.statusText);
        }

    };
}
//提供一个myAjax对象   对象里面有get方法  postForm方法   postJSON方法
var myAjax = {
    get: function (url, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('get', baseURL + url + '?' + qs.stringify(params));
        //认证信息
        httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('token'));
        //发送请求
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            };
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    },
    postForm: function (url, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('post', baseURL + url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //认证信息
        httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('token'));
        //发送数据
        httpRequest.send(qs.stringify(params));
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            };
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    },
    postJSON: function (url, params, success, error) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('post', baseURL + url);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        //认证信息
        httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('token'));
        //发送数据
        httpRequest.send(JSON.stringify(params));
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText));
            };
            if (httpRequest.readyState === 4 && httpRequest.status === 500) {
                error(JSON.parse(httpRequest.responseText));
            }
        }
    }
}