// Hide show part of the txt for work experience
$(document).ready(function(){
    $("#show").click(function(){
        $("#toggled").toggle();
        $(this).hide();
        $("#hide").show();
    });

    $("#hide").click(function(){
        $("#toggled").toggle();
        $(this).hide();
        $('#show').show();
    });

});

