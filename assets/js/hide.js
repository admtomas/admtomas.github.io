// Hide show part of the txt for work experience
$(document).ready(function(){
    $("#show-one").click(function(){
        $("#toggled-one").toggle();
        $(this).hide();
        $("#hide-one").show();
    });

    $("#hide-one").click(function(){
        $("#toggled-one").toggle();
        $(this).hide();
        $('#show-one').show();
    });

    $("#show-two").click(function(){
        $("#toggled-two").toggle();
        $(this).hide();
        $("#hide-two").show();
    });

    $("#hide-two").click(function(){
        $("#toggled-two").toggle();
        $(this).hide();
        $('#show-two').show();
    });

    $("#show-three").click(function(){
        $("#toggled-three").toggle();
        $(this).hide();
        $("#hide-three").show();
    });

    $("#hide-three").click(function(){
        $("#toggled-three").toggle();
        $(this).hide();
        $('#show-three').show();
    });

});

