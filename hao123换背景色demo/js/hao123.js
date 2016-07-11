if (localStorage.colorstyle) {
    css(localStorage.colorstyle)
}

function css(colors) {
    switch (colors) {
        case 'red':
            // 红色
            document.bgColor = '#FF0000'; //定义背景颜色
            menuschange.className = 'menus-red'; // 替换导航栏外框颜色
            firstchange.className = 'first-red'; //替换导航栏首页链接颜色
            firstchangemenuswrp.className = 'menuswrp-red' //替换首个某块杯具颜色
            hotcolor01.className = 'hotred'; //替换热词颜色
            hotcolor02.className = 'hotred';
            hotcolor03.className = 'hotred';
            hotcolor04.className = 'hotred';
            somecolor.className = 'somered'; //替换关键词颜色
            localStorage.colorstyle = "red"; //写入样式到localStorage
            break;
        case 'blue':
            // 蓝色
            document.bgColor = '#0000FF';
            menuschange.className = 'menus-blue';
            firstchange.className = 'first-blue';
            firstchangemenuswrp.className = 'menuswrp-blue';
            hotcolor01.className = 'hotblue';
            hotcolor02.className = 'hotblue';
            hotcolor03.className = 'hotblue';
            hotcolor04.className = 'hotblue';
            somecolor.className = 'someblue a';
            localStorage.colorstyle = "blue";
            break;
        case 'yellow':
            // 黄色
            document.bgColor = '#E3CF57';
            menuschange.className = 'menus-yellow';
            firstchange.className = 'first-yellow';
            firstchangemenuswrp.className = 'menuswrp-yellow';
            hotcolor01.className = 'hotyellow';
            hotcolor02.className = 'hotyellow';
            hotcolor03.className = 'hotyellow';
            hotcolor04.className = 'hotyellow';
            somecolor.className = 'someyellow a';
            localStorage.colorstyle = "yellow";
            break;
        case 'white':
            // 原型
            document.bgColor = '#FFF';
            menuschange.className = 'menus';
            firstchange.className = 'first';
            firstchangemenuswrp.className = 'menuswrp';
            hotcolor01.className = 'orange';
            hotcolor02.className = 'orange';
            hotcolor03.className = 'orange';
            hotcolor04.className = 'orange';
            somecolor.className = 'right02 a';
            localStorage.removeItem('colorstyle'); // localStorage清除样式
            break;
        case 'gray':
            // 灰色
            document.bgColor = '#C0C0C0';
            menuschange.className = 'menus-gray';
            firstchange.className = 'first-gray';
            firstchangemenuswrp.className = 'menuswrp-gray';
            hotcolor01.className = 'hotgray';
            hotcolor02.className = 'hotgray';
            hotcolor03.className = 'hotgray';
            hotcolor04.className = 'hotgray';
            somecolor.className = 'somegray a';
            localStorage.colorstyle = "gray";
            break;
        case 'brown':
            // 棕色
            document.bgColor = '#802A2A';
            menuschange.className = 'menus-brown';
            firstchange.className = 'first-brown';
            firstchangemenuswrp.className = 'menuswrp-brown';
            hotcolor01.className = 'hotbrown';
            hotcolor02.className = 'hotbrown';
            hotcolor03.className = 'hotbrown';
            hotcolor04.className = 'hotbrown';
            somecolor.className = 'somebrown a';
            localStorage.colorstyle = "brown";
    }
}
