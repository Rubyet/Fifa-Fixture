var tpl=[0,1,2,3,4,5];
var tw=[0,1,2,3,4,5];
var td=[0,1,2,3,4,5];
var tl=[0,1,2,3,4,5];
var ts=[0,1,2,3,4,5];
var ta=[0,1,2,3,4,5];
var tdif=[0,1,2,3,4,5];
var tpo=[0,1,2,3,4,5];

var ppl=[0,1,2];
var pw=[0,1,2];
var pd=[0,1,2];
var pl=[0,1,2];
var ps=[0,1,2];
var pa=[0,1,2];
var pdif=[0,1,2];
var ppo=[0,1,2];

function compare(first,second)
{
  if($(first).val()==$(second).val())
  {
    return "draw";
  }
  if($(first).val()<$(second).val())
  {
    return second;
  }
  else
  {
    return first;
  }
}

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

      console.log(compare(id1,id2));
    }
    $(id1).prop( "disabled", true );
    $(id2).prop( "disabled", true );
  } else {
    $("#" + id3 + ".card_back").css({ "background-color": "rgb(10 20 34 / 35%)" });  
    $(id1).prop( "disabled", false );
    $(id2).prop( "disabled", false );
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

      for(i=1;i<=3;i++)
      {
        $("#pl"+i+"").text(ppl[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#w"+i+"").text(pw[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#d"+i+"").text(pd[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#l"+i+"").text(pl[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#s"+i+"").text(ps[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#a"+i+"").text(pa[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#dif"+i+"").text(pdif[i-1]);
      }
      for(i=1;i<=3;i++)
      {
        $("#po"+i+"").text(ppo[i-1]);
      }
      
//////////////////////////////////////
      $("#pt1").text(P1T1);
      $("#pt2").text(P1T2);
      $("#pt3").text(P2T1);
      $("#pt4").text(P2T2);
      $("#pt5").text(P3T1);
      $("#pt6").text(P3T2);

      for(i=1;i<=6;i++)
      {
        $("#plt"+i+"").text(tpl[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#wt"+i+"").text(tw[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#dt"+i+"").text(td[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#lt"+i+"").text(tl[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#st"+i+"").text(ts[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#at"+i+"").text(ta[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#dift"+i+"").text(tdif[i-1]);
      }
      for(i=1;i<=6;i++)
      {
        $("#pot"+i+"").text(tpo[i-1]);
      }
      
///////////////////////
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
