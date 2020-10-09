requirejs.config({
    paths : {
        "jquery" : "../others/jquery-3.5.1"
    }
});

define(['jquery' , './navShow','./item','./build'], function($ , navShow ,item,side) {
    
   //navShow:二级导航的显示隐藏：navshow(鼠标一上的盒子,需要切换隐藏显示的盒子)
   //item:iten项的显示隐藏item(item项)
   //side:切换楼层效果，调用函数side(页面的各个模块，侧边导航)
    
});