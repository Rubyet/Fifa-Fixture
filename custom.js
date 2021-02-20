var t1pl=0;var t1w=0;var t1d=0;var t1l=0;var t1s=0;var t1a=0;var t1dif=0;var t1po=0;
var t2pl=0;var t2w=0;var t2d=0;var t2l=0;var t2s=0;var t2a=0;var t2dif=0;var t2po=0;
var t3pl=0;var t3w=0;var t3d=0;var t3l=0;var t3s=0;var t3a=0;var t3dif=0;var t3po=0;
var t4pl=0;var t4w=0;var t4d=0;var t4l=0;var t4s=0;var t4a=0;var t4dif=0;var t4po=0;
var t5pl=0;var t5w=0;var t5d=0;var t5l=0;var t5s=0;var t5a=0;var t5dif=0;var t5po=0;
var t6pl=0;var t6w=0;var t6d=0;var t6l=0;var t6s=0;var t6a=0;var t6dif=0;var t6po=0;

var p1pl=0;var p1w=0;var p1d=0;var p1l=0;var p1s=0;var p1a=0;var p1dif=0;var p1po=0;
var p2pl=0;var p2w=0;var p2d=0;var p2l=0;var p2s=0;var p2a=0;var p2dif=0;var p2po=0;
var p3pl=0;var p3w=0;var p3d=0;var p3l=0;var p3s=0;var p3a=0;var p3dif=0;var p3po=0;



var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.03);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  setTimeout(function () {
    loadNow(1);
  }, 200);
});

//  control every card separetly, color change,input check  //
function focus_out(id1, id2, id3) {
  if ($(id1).val() != "" && $(id2).val() != "") {
    if (id3.includes("qc")) {
      $("#" + id3 + ".card_back").css({ "background-color": "rgb(49 247 0 / 35%)" });

      
    } else if (id3.includes("kc")) {
      $("#" + id3 + ".card_back").css({ "background-color": "rgb(232 248 6 / 35%)" });
    } else {
      $("#" + id3 + ".card_back").css({ "background-color": "rgb(255 0 0 / 35%)" });
    }
  } else {
    $("#" + id3 + ".card_back").css({ "background-color": "rgb(10 20 34 / 35%)" });
  }
}
function value_return(variable) {
  if (variable == 1) {
    return "in6";
  }
  if (variable == 2) {
    return "in7";
  }
  if (variable == 3) {
    return "in8";
  }
  if (variable == 4) {
    return "in9";
  }
  if (variable == 5) {
    return "in10";
  }
  if (variable == 6) {
    return "in11";
  }
}
// initilize jqery data table //
$(document).ready(function () {
    

        console.log(a['real'][0]);
  //asign team
  var player1;
  var player1;
  var player1;

  var P1T1;
  var P1T2;
  var P2T1;
  var P2T2;
  var P3T1;
  var P3T2;

  $("#table_1").DataTable({
    paging: false,
    bFilter: false,
    bInfo: false,
  });
  $("#table_2").DataTable({
    paging: false,
    bFilter: false,
    bInfo: false,
  });

  $("#number_number").show();
  $("#player_name").hide();
  $("#team_name").hide();
  $("#team_number").hide();
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();

  $("#score_table_btn").click(function () {
    $("#page1").hide();
    $("#page2").show();
    $("#page3").show();
    $("body").css("background-image", "url('img/Background/bg2.png')");
  });
  $("#fixture_table_btn").click(function () {
    $("#page1").show();
    $("#page2").hide();
    $("#page3").hide();
    $("body").css(
      "background-image",
      "url('img/Background/Football-Stadium-background.jpg')"
    );
  });

  $("#player_number_btn").click(function () {
    if ($("#in1").val() != "") {
      $("#player_number").hide();
      $("#team_number").show();
    } else {
      alert("Please Enter Player Number");
    }
  });
  $("#team_number_btn").click(function () {
    if ($("#in2").val() != "") {
      $("#team_number").hide();
      $("#player_name").show();
    } else {
      alert("Please Enter Team Number");
    }
  });
  $("#player_name_btn").click(function () {
    if (
      $("#in3").val() != "" &&
      $("#in4").val() != "" &&
      $("#in5").val() != ""
    ) {
      $("#player_name").hide();
      $("#team_name").show();
    } else {
      alert("Please Fill All Player Names");
    }
  });
  $("#team_name_btn").click(function () {
    if (
      $("#in6").val() != "" &&
      $("#in7").val() != "" &&
      $("#in8").val() != "" &&
      $("#in9").val() != "" &&
      $("#in10").val() != "" &&
      $("#in11").val() != ""
    ) {
      player1 = $("#in3").val();
      player2 = $("#in4").val();
      player3 = $("#in5").val();

      if ($("#in12").is(":checked")) {
        var arr = [];
        while (arr.length < 6) {
          var r = Math.floor(Math.random() * 6) + 1;
          if (arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(value_return(arr['real']));
        P1T1 = $("#" + value_return(arr[0])).val();
        P1T2 = $("#" + value_return(arr[1])).val();
        P2T1 = $("#" + value_return(arr[2])).val();
        P2T2 = $("#" + value_return(arr[3])).val();
        P3T1 = $("#" + value_return(arr[4])).val();
        P3T2 = $("#" + value_return(arr[5])).val();
      } else {
        P1T1 = $("#in6").val();
        P1T2 = $("#in9").val();
        P2T1 = $("#in7").val();
        P2T2 = $("#in10").val();
        P3T1 = $("#in8").val();
        P3T2 = $("#in11").val();
      }

      console.log("player1= " + player1);
      console.log("player2= " + player2);
      console.log("player3= " + player3);

      console.log("T1= " + P1T1);
      console.log("T2= " + P1T2);
      console.log("T3= " + P2T1);
      console.log("T4= " + P2T2);
      console.log("T5= " + P3T1);
      console.log("T6= " + P3T2);

      $("#tp_1_1").attr("src",a[P1T1][0]);
      $("#tp_1_2").attr("src",a[P1T1][0]);
      $("#tp_1_3").attr("src",a[P1T1][0]);
      $("#tp_1_4").attr("src",a[P1T1][0]);

      $("#tp_2_1").attr("src",a[P1T2][0]);
      $("#tp_2_2").attr("src",a[P1T2][0]);
      $("#tp_2_3").attr("src",a[P1T2][0]);
      $("#tp_2_4").attr("src",a[P1T2][0]);

      $("#tp_3_1").attr("src",a[P2T1][0]);
      $("#tp_3_2").attr("src",a[P2T1][0]);
      $("#tp_3_3").attr("src",a[P2T1][0]);
      $("#tp_3_4").attr("src",a[P2T1][0]);

      $("#tp_4_1").attr("src",a[P2T2][0]);
      $("#tp_4_2").attr("src",a[P2T2][0]);
      $("#tp_4_3").attr("src",a[P2T2][0]);
      $("#tp_4_4").attr("src",a[P2T2][0]);

      $("#tp_5_1").attr("src",a[P3T1][0]);
      $("#tp_5_2").attr("src",a[P3T1][0]);
      $("#tp_5_3").attr("src",a[P3T1][0]);
      $("#tp_5_4").attr("src",a[P3T1][0]);

      $("#tp_6_1").attr("src",a[P3T2][0]);
      $("#tp_6_2").attr("src",a[P3T2][0]);
      $("#tp_6_3").attr("src",a[P3T2][0]);
      $("#tp_6_4").attr("src",a[P3T2][0]);
////////////////////////////////////////////////      
      $("#p1").text(player1);
      $("#p2").text(player2);
      $("#p3").text(player3);

      $("#pl1").text(p1pl);
      $("#pl2").text(p2pl);
      $("#pl3").text(p3pl);
      
      $("#w1").text(p1w);
      $("#w2").text(p2w);
      $("#w3").text(p3w);
      
      $("#d1").text(p1d);
      $("#d2").text(p2d);
      $("#d3").text(p3d);

      $("#l1").text(p1l);
      $("#l2").text(p2l);
      $("#l3").text(p3l);

      $("#s1").text(p1s);
      $("#s2").text(p2s);
      $("#s3").text(p3s);

      $("#a1").text(p1a);
      $("#a2").text(p2a);
      $("#a3").text(p3a);

      $("#dif1").text(p1dif);
      $("#dif2").text(p2dif);
      $("#dif3").text(p3dif);

      $("#po1").text(p1po);
      $("#po2").text(p2po);
      $("#po3").text(p3po);
//////////////////////////////////////
      $("#pt1").text(P1T1);
      $("#pt2").text(P1T2);
      $("#pt3").text(P2T1);
      $("#pt4").text(P2T2);
      $("#pt5").text(P3T1);
      $("#pt6").text(P3T2);

      $("#plt1").text(t1pl);
      $("#plt2").text(t2pl);
      $("#plt3").text(t3pl);
      $("#plt4").text(t4pl);
      $("#plt5").text(t5pl);
      $("#plt6").text(t6pl);

      $("#wt1").text(t1w);
      $("#wt2").text(t2w);
      $("#wt3").text(t3w);
      $("#wt4").text(t4w);
      $("#wt5").text(t5w);
      $("#wt6").text(t6w);

      $("#dt1").text(t1d);
      $("#dt2").text(t2d);
      $("#dt3").text(t3d);
      $("#dt4").text(t4d);
      $("#dt5").text(t5d);
      $("#dt6").text(t6d);

      $("#lt1").text(t1l);
      $("#lt2").text(t2l);
      $("#lt3").text(t3l);
      $("#lt4").text(t4l);
      $("#lt5").text(t5l);
      $("#lt6").text(t6l);

      $("#st1").text(t1s);
      $("#st2").text(t2s);
      $("#st3").text(t3s);
      $("#st4").text(t4s);
      $("#st5").text(t5s);
      $("#st6").text(t6s);

      $("#at1").text(t1a);
      $("#at2").text(t2a);
      $("#at3").text(t3a);
      $("#at4").text(t4a);
      $("#at5").text(t5a);
      $("#at6").text(t6a);

      $("#dift1").text(t1dif);
      $("#dift2").text(t2dif);
      $("#dift3").text(t3dif);
      $("#dift4").text(t4dif);
      $("#dift5").text(t5dif);
      $("#dift6").text(t6dif);

      $("#pot1").text(t1po);
      $("#pot2").text(t2po);
      $("#pot3").text(t3po);
      $("#pot4").text(t4po);
      $("#pot5").text(t5po);
      $("#pot6").text(t6po);

      for(i=1;i<=8;i++)
      {
        $("#tpn_1_"+i+"").text(player1);
      }      
      for(i=1;i<=8;i++)
      {
        $("#tpn_2_"+i+"").text(player2);
      }
      for(i=1;i<=8;i++)
      {
        $("#tpn_3_"+i+"").text(player3);
      }

      $("body").css(
        "background-image",
        "url('img/Background/Football-Stadium-background.jpg')"
      );
      $("#page0").hide();
      $("#page1").show();
    } else {
      alert("Please Fill All Team name");
    }
  });
});
