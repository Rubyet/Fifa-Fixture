var loader;
    function loadNow(opacity) {
        if (opacity <= 0) {
            displayContent();
        } else {
            loader.style.opacity = opacity;
            window.setTimeout(function() {
                loadNow(opacity - 0.03);
            }, 50);
        }
    }
    
    function displayContent() {
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
    document.addEventListener("DOMContentLoaded", function() {
        loader = document.getElementById('loader');
        setTimeout(function(){
            loadNow(1);
        }, 2200);
        
    });

//  control every card separetly, color change,input check  //
function focus_out(id1, id2, id3) {
    if ($(id1).val() != '' && $(id2).val() != '') {
        // console.log("#" + id3 + " .card_back");
        if (id3.includes("qc")) {
            $("#" + id3 + ".card_back").css({ "background-color": "#31f7005e" });
        }
        else if (id3.includes("kc")) {
            $("#" + id3 + ".card_back").css({ "background-color": "#e8f8065e" });
        }
        else {
            $("#" + id3 + ".card_back").css({ "background-color": "#ff00005e" });
        }
    }
    else {
        $("#" + id3 + ".card_back").css({ "background-color": "#0a14225e" });
        console.log("f-else");
    }
}
// initilize jqery data table //
$(document).ready( function () {
    $('#table_1').DataTable(
        {
            "paging":   false,
            bFilter: false, bInfo: false
        }
    );
    $('#table_2').DataTable(
        {
            "paging":   false,
            bFilter: false, bInfo: false
        }
    );

    var e = jQuery.Event("keydown");
    e.which = 50; // # Some key code value
    $("#tigger").trigger(e);
} );