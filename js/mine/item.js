define([
    'jquery',
], function($) {
    
    function item($elem){
        $elem.on('mouseover',function(){
            $(this).find('.itemChild').show();
        });
        $elem.on('mouseout',function(){
            $(this).find('.itemChild').hide();
        })
    }

    return item;
    
});