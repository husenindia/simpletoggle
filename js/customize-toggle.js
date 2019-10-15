/*************************/
/***** AUTHOR : 
/***** DATE : 05-02-2015 : (Standard Date Format mm-dd-yyyy)
/*************************/
$(document).ready(function(){
    $('li').click(function () {
        $this = $(this);
        $this.parents('ul').find('li').not($this).removeClass('active');
        $this.toggleClass('active');
    })
});
