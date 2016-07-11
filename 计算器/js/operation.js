function operation(x, y, char) {
    //定义函数并接收三个变量
    var x = parseFloat(document.getElementById('num01').value);
    var y = parseFloat(document.getElementById('num02').value);
    var char = document.getElementById('char').value;
    var result; //定义result用来存放输出的结果
    //定义当收到的char为加减乘除时的不同结果。
    if (char == '加') {
        result = x + y;
    } else if (char == '减') {
        result = x - y;
    } else if (char == '乘') {
        result = x * y;
    } else if (char == '除') {
        if (y == 0) {
            result = '输入的第二个数值不合法';
            alert(result);
            return;
        } else {
            result = x / y;
        }
    }

    result = parseFloat(result.toFixed(9)); //设置精度处理bug
    alert(result); //输出结果
    return;
}
