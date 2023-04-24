$( document ).ready(function () {
    $(".moreBox").slice(0, 1).show();
    if ($(".card:hidden").length != 0) {
        $("#loadMore").show();
    }		
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 2).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});