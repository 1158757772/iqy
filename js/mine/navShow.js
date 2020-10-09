define([
    'jquery',
], function($) {
    
    function navShow($elem,navShowContent){
        $elem.on('mouseover',function(){
            navShowContent.stop().show();
        });
        $elem.on('mouseout',function(){
            navShowContent.stop().hide();
        })
    }

    return navShow;
    
});