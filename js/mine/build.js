define([
    'jquery',
], function($) {
    
    function side($side,$sideNav){
        $sideNav.on('click','li',function(){
            console.log($(document).scrollTop())
             $(document).scrollTop($side.eq($(this).index()).offset().top);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        })
        window.onscroll = function(){
            var arr = [];
            for(var i=0;i<$side.length;i++){
                arr.push({ dir : Math.abs($side[i].getBoundingClientRect().top) , index : i });
            }


            arr.sort(function(d1,d2){
                return d1.dir - d2.dir;
            });
            var index = arr[0].index;   //数组的第一项就是最近的div
            $sideNav.children().removeClass('active');
            $sideNav.children().eq(index).addClass('active');
        };
    }

    return side;
    
});