// var array = [];
// var count = 1;
// var inner = []; //存放数组array的不重复的元素比如
// var sum = []; //存放数组array中每个不同元素的出现的次数
// array = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
// for (var i = 0, leni = array.length; i < leni; i++) {
//     for (var j = i + 1, lenj = array.length; j < lenj; j++) {
//         if (array[i] == array[j]) {
//             count++; //当前这个元素相同的个数
//             array.splice(j, 1); //每找到一个相同的元素，就要把它移除掉
//             j--;
//         }
//     }
//     inner[i] = array[i]; //将当前的元素存入到inner数组中
//     sum[i] = count; //并且将有多少个当前这样的元素的个数存入sum数组中
//     count = 1; //再将count重新赋值，进入下一个元素的判断
// }


// //算出array数组中出现次数最多的元素
// var newsum = []; //  sum;
// for (var item in sum) {
//     newsum[item] = sum[item];
// }
// newsum.sort();
// inner.sort();


// var first = ''; //存放出现次数最多的元素，以及个数
// var fcount = 1; //计算出现次数最多的元素总共有多少个
// //算出出现次数最多的元素及个数
// for (var i = 0, lensum = sum.length; i < lensum; i++) {
//     if (sum[i] == newsum[newsum.length - 1]) {
//         first += "出现次数最多的元素是：" + inner[i] + " , 出现了：" + sum[i] + ' 次。';
//         fcount++;
//     }
// }
// document.write(first); //打印出现最多的元素以及数量

// array = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
// var out = []; //定义空数组存放最多的那个数值的位置情况
// first = inner[0]; //获取刚刚得到的占数最多的元素。
// var j = 0; //定义一个循环变量
// //定义一个循环，当数组中的变量跟占比最多的变量相同时，输出这个值所在的位置。
// for (var i = 0, leni = array.length; i < leni; i++) {
//     if (first == array[i]) {
//         out[j] = i;
//         j++;
//     }
// }
// out = "<br/>数组中占比最大的数值所在的位置为" + out
// document.write(out);



var array = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
var result = {}; //创建result用来存放每个元素以及他的位置

//通过函数把每个相同值创建数组，并把位置储存于result。
array.forEach(function(char, index) {
    var item = result[char];
    if (item) {
        item.num += 1;
        item.position.push(index);
    } else {
        result[char] = { mun: 1, position: [index] };
    }
});

//定义maxChar用于储存占比最大的数，获取并排序数组，造成第0位为最大数。
var maxChar = Object.keys(result).sort(function(a, b) {
    return result[a].num < result[b].num;
})[0];

//输出结果
document.write('出现次数最多的元素是 ', maxChar, ' 。出现次数为 ', result[maxChar].position.length, ' 次。出现位置为', result[maxChar].position)
