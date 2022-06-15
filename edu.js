$(document).ready(function() {
    $("#hiddiv").hide();
    var currentElem;
    var clickElem = $("#opt");
    $("#menu > a").hover(function() {
        $(this).css("background", "blue");
        index = $("#menu > a").index(this);
        if(index != 0) {
            $("#hiddiv").css("left",20 + 54 + (index - 1) * 84 + 8 + "px");
            $("#hiddiv").show();
        }
        currentElem = $(this);
    }, function() {
        if($(this).attr("id") != "opt")
            $(this).css("background", "rgb(172, 232, 32)");
        $("#hiddiv").hide();
    })

    $("#menu > a").click(function() {
        currentElem = $(this);
        clickElem = $(this);
        $("#menu").children("#opt").removeAttr("id");
        $("#menu > a").each(function() {
            if($(this).attr("id") != "opt")
                $(this).css("background", "rgb(172, 232, 32)");
        })
        $(this).attr("id","opt");
        $("#menu").children("#opt").css("background", "blue");
    })

    $("#hiddiv").hover(function() {
        $("#hiddiv").show();
        currentElem.css("background", "blue");
    }, function() {
        $("#hiddiv").hide();
        if(currentElem.attr("id") != clickElem.attr("id"))
            currentElem.css("background", "rgb(172, 232, 32)");
        else currentElem.css("background", "blue");
    })
})