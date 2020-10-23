jQuery(document).on('change','#multiplechoice',function(){

    if($(this).prop("checked") == true){
        $('.multipleoptions').show();
        document.getElementById("option1value").required = true;
        document.getElementById("option2value").required = true;
        document.getElementById("option3value").required = true;
        document.getElementById("option4value").required = true;
        jQuery('.multipleoptions .correctvalue:eq(0)').prop('checked', true);
        // document.getElementByClass("correctvalue").required = true;

    }else{
        $('.multipleoptions').hide();
        document.getElementById("option1value").required = false;
        document.getElementById("option2value").required = false;
        document.getElementById("option3value").required = false;
        document.getElementById("option4value").required = false;
        // document.getElementByClass("correctvalue").required = false;
    }

});

jQuery(document).on('click', 'input[type="checkbox"]', function() {      
    jQuery('.correctvalue').not(this).prop('checked', false);      
});