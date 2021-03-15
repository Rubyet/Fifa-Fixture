//asign team
var player1;
var player2;
var player3;

var P1T1;
var P1T2;
var P2T1;
var P2T2;
var P3T1;
var P3T2;

var tpl = [0, 0, 0, 0, 0, 0];
var tw = [0, 0, 0, 0, 0, 0];
var td = [0, 0, 0, 0, 0, 0];
var tl = [0, 0, 0, 0, 0, 0];
var ts = [0, 0, 0, 0, 0, 0];
var ta = [0, 0, 0, 0, 0, 0];
var tdif = [0, 0, 0, 0, 0, 0];
var tpo = [0, 0, 0, 0, 0, 0];

var qualifier = 0;
var knockout = 0;

var ppl = [0, 0, 0];
var pw = [0, 0, 0];
var pd = [0, 0, 0];
var pl = [0, 0, 0];
var ps = [0, 0, 0];
var pa = [0, 0, 0];
var pdif = [0, 0, 0];
var ppo = [0, 0, 0];

var kppl = [0, 0, 0];
var kpw = [0, 0, 0];
var kpd = [0, 0, 0];
var kpl = [0, 0, 0];
var kps = [0, 0, 0];
var kpa = [0, 0, 0];
var kpdif = [0, 0, 0];
var kppo = [0, 0, 0];

function compare(first, second) {
  if ($(first).val() == $(second).val()) {
    return "draw";
  }
  if ($(first).val() < $(second).val()) {
    return second;
  } else {
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

function team(id) {
  var id_name = $(id).attr("id");
  return id_name.split("_")[0];
}
function draw(id1,id2,count){
  var goal1 = parseInt($(id1).val());
  var goal2 = parseInt($(id2).val());
  for(i=0;i<6;i++)
        {
          if (team(id1).includes((i+1).toString())) {
            if(count == 0)
            {
              kppl[p]=kppl[p]+1;
              kpw[p]=kpw[p];
              kpd[p]=kpd[p]+1;
              kpl[p]=kpl[p];
              kps[p]=parseInt(kps[p])+goal1;
              kpa[p]=parseInt(kpa[p])+goal2;
              kpdif[p]=kps[p]-kpa[p];
              kppo[p]=kppo[p]+1;
            }
            else
            {
              tpl[i]=tpl[i]+1;
              tw[i]=tw[i];
              td[i]=td[i]+1;
              tl[i]=tl[i];
              ts[i]=parseInt(ts[i])+goal1;
              ta[i]=parseInt(ta[i])+goal2;
              tdif[i]=ts[i]-ta[i];
              tpo[i]=tpo[i]+1;
              var p;
              if(i==0 || i==1)
              {
                p=0;
              }
              if(i==2 || i==3)
              {
                p=1;
              }
              if(i==4 || i==5)
              {
                p=2;
              }
              ppl[p]=ppl[p]+1;
              pw[p]=pw[p];
              pd[p]=pd[p]+1;
              pl[p]=pl[p];
              ps[p]=parseInt(ps[p])+goal1;
              pa[p]=parseInt(pa[p])+goal2;
              pdif[p]=ps[p]-pa[p];
              ppo[p]=ppo[p]+1;
            }
            
          }
          
          if (team(id2).includes((i+1).toString())) {
            if(count == 0)
            {
              kppl[p]=kppl[p]+1;
              kpw[p]=kpw[p];
              kpd[p]=kpd[p]+1;
              kpl[p]=kpl[p];
              kps[p]=parseInt(kps[p])+goal2;
              kpa[p]=parseInt(kpa[p])+goal1;
              kpdif[p]=kps[p]-kpa[p];
              kppo[p]=kppo[p]+1;
            }
            else
            {
              tpl[i]=tpl[i]+1;
              tw[i]=tw[i];
              td[i]=td[i]+1;
              tl[i]=tl[i];
              ts[i]=parseInt(ts[i])+goal2;
              ta[i]=parseInt(ta[i])+goal1;
              tdif[i]=ts[i]-ta[i];
              tpo[i]=tpo[i]+1;
              var p;
              if(i==0 || i==1)
              {
                p=0;
              }
              if(i==2 || i==3)
              {
                p=1;
              }
              if(i==4 || i==5)
              {
                p=2;
              }
              ppl[p]=ppl[p]+1;
              pw[p]=pw[p];
              pd[p]=pd[p]+1;
              pl[p]=pl[p];
              ps[p]=parseInt(ps[p])+goal2;
              pa[p]=parseInt(pa[p])+goal1;
              pdif[p]=pa[p]-pa[p];
              ppo[p]=ppo[p]+1;
            }
            
          }
        }
}
function win(id1,id2,count){
  var goal1 = parseInt($(id1).val());
  var goal2 = parseInt($(id2).val());
  for(i=0;i<6;i++)
        {
          if (team(id1).includes((i+1).toString())) {
            if(count == 0)
            {
              kppl[p]=kppl[p]+1;
              kpw[p]=kpw[p]+1;
              kpd[p]=kpd[p];
              kpl[p]=kpl[p];
              kps[p]=parseInt(kps[p])+goal1;
              kpa[p]=parseInt(kpa[p])+goal2;
              kpdif[p]=kps[p]-kpa[p];
              kppo[p]=kppo[p]+3;
            }
            else
            {
              tpl[i]=tpl[i]+1;
              tw[i]=tw[i]+1;
              td[i]=td[i];
              tl[i]=tl[i];
              ts[i]=parseInt(ts[i])+goal1;
              ta[i]=parseInt(ta[i])+goal2;
              tdif[i]=ts[i]-ta[i];
              tpo[i]=tpo[i]+3;

              var p;
              if(i==0 || i==1)
              {
                p=0;
              }
              if(i==2 || i==3)
              {
                p=1;
              }
              if(i==4 || i==5)
              {
                p=2;
              }
              ppl[p]=ppl[p]+1;
              pw[p]=pw[p]+1;
              pd[p]=pd[p];
              pl[p]=pl[p];
              ps[p]=parseInt(ps[p])+goal1;
              pa[p]=parseInt(pa[p])+goal2;
              pdif[p]=ps[p]-pa[p];
              ppo[p]=ppo[p]+3;
            }
            
          }
          if (team(id2).includes((i+1).toString())) {
            if(count == 0)
            {
              kppl[p]=kppl[p]+1;
              kpw[p]=kpw[p];
              kpd[p]=kpd[p];
              kpl[p]=kpl[p]+1;
              kps[p]=parseInt(kps[p])+goal2;
              kpa[p]=parseInt(kpa[p])+goal1;
              kpdif[p]=kps[p]-kpa[p];
              kppo[p]=kppo[p];
            }
            else
            {
              tpl[i]=tpl[i]+1;
              tw[i]=tw[i];
              td[i]=td[i];
              tl[i]=tl[i]+1;
              ts[i]=parseInt(ts[i])+goal2;
              ta[i]=parseInt(ta[i])+goal1;
              tdif[i]=ts[i]-ta[i];
              tpo[i]=tpo[i];

              var p;
              if(i==0 || i==1)
              {
                p=0;
              }
              if(i==2 || i==3)
              {
                p=1;
              }
              if(i==4 || i==5)
              {
                p=2;
              }
              ppl[p]=ppl[p]+1;
              pw[p]=pw[p];
              pd[p]=pd[p];
              pl[p]=pl[p]+1;
              ps[p]=parseInt(ps[p])+goal2;
              pa[p]=parseInt(pa[p])+goal1;
              pdif[p]=ps[p]-pa[p];
              ppo[p]=ppo[p];
            }
            
          }
        }
}
//  control every card separetly, color change,input check  //
function focus_out(id1, id2, id3) {
  if ($(id1).val() != "" && $(id2).val() != "") {
    if (id3.includes("qc")) {
      if ($(id1).val() == $(id2).val()) {
        draw(id1,id2,1);
      }
      else if ($(id1).val() >= $(id2).val()) {
        win(id1,id2,1);
      }
      else{
        win(id2,id1,1);
      }
      // console.log(ppl[1]);
      player_refresh();
      team_refresh();
      qualifier = qualifier + 1;
      $("#" + id3 + ".card_back").css({
        "background-color": "rgb(49 247 0 / 35%)",
      });
    } else if (id3.includes("kc")) {
      if ($(id1).val() == $(id2).val()) {
        draw(id1,id2,0);
      }
      else if ($(id1).val() >= $(id2).val()) {
        win(id1,id2,0);
      }
      else{
        win(id2,id1,0);
      }
      knockout_refresh();
      knockout = knockout + 1;
      $("#" + id3 + ".card_back").css({
        "background-color": "rgb(232 248 6 / 35%)",
      });
    } else {
      $("#" + id3 + ".card_back").css({
        "background-color": "rgb(255 0 0 / 35%)",
      });
    }
    $(id1).prop("disabled", true);
    $(id2).prop("disabled", true);
  } else {
    $("#" + id3 + ".card_back").css({
      "background-color": "rgb(10 20 34 / 35%)",
    });
    $(id1).prop("disabled", false);
    $(id2).prop("disabled", false);
  }
  if(qualifier >= 12)
  {
    if(tpo[0]>tpo[1])
    {
      $("#ktp_1_1").attr("src", a[P1T1][0]);
      $("#ktp_1_2").attr("src", a[P1T1][0]);
      $("#kp1").text(P1T1 +" ("+player1+")");
    }
    else if(tpo[0]<tpo[1])
    {
      $("#ktp_1_1").attr("src", a[P1T2][0]);
      $("#ktp_1_2").attr("src", a[P1T2][0]);
      $("#kp1").text(P1T2 +" ("+player1+")");
    }
    else
    {
      if(tdif[0]>tdif[1])
      {
        $("#ktp_1_1").attr("src", a[P1T1][0]);
        $("#ktp_1_2").attr("src", a[P1T1][0]);
        $("#kp1").text(P1T1 +" ("+player1+")");
      }
      else if(tdif[0]<tdif[1])
      {
        $("#ktp_1_1").attr("src", a[P1T2][0]);
        $("#ktp_1_2").attr("src", a[P1T2][0]);
        $("#kp1").text(P1T2 +" ("+player1+")");
      }
      else{alert("Aita kono kotha ato mil kmne hoy?");}
    }

    if(tpo[2]>tpo[3])
    {
      $("#ktp_2_1").attr("src", a[P2T1][0]);
      $("#ktp_2_2").attr("src", a[P2T1][0]);
      $("#kp2").text(P2T1 +" ("+player2+")");
    }
    else if(tpo[2]<tpo[3])
    {
      $("#ktp_2_1").attr("src", a[P2T2][0]);
      $("#ktp_2_2").attr("src", a[P2T2][0]);
      $("#kp2").text(P2T2 +" ("+player2+")");
    }
    else
    {
      if(tdif[2]>tdif[3])
      {
        $("#ktp_2_1").attr("src", a[P2T1][0]);
        $("#ktp_2_2").attr("src", a[P2T1][0]);
        $("#kp2").text(P2T1 +" ("+player2+")");
      }
      else if(tdif[2]<tdif[3])
      {
        $("#ktp_2_1").attr("src", a[P2T2][0]);
        $("#ktp_2_2").attr("src", a[P2T2][0]);
        $("#kp2").text(P2T2 +" ("+player2+")");
      }
      else{alert("Aita kono kotha ato mil kmne hoy?");}
    }

    if(tpo[4]>tpo[5])
    {
      $("#ktp_3_1").attr("src", a[P3T1][0]);
      $("#ktp_3_2").attr("src", a[P3T1][0]);
      $("#kp3").text(P3T1 +" ("+player3+")");
    }
    else if(tpo[4]<tpo[5])
    {
      $("#ktp_3_1").attr("src", a[P3T2][0]);
      $("#ktp_3_2").attr("src", a[P3T2][0]);
      $("#kp3").text(P3T2 +" ("+player3+")");
    }
    else
    {
      if(tdif[4]>tdif[5])
      {
        $("#ktp_3_1").attr("src", a[P3T1][0]);
        $("#ktp_3_2").attr("src", a[P3T1][0]);
        $("#kp3").text(P3T1 +" ("+player3+")");
      }
      else if(tdif[4]<tdif[5])
      {
        $("#ktp_3_1").attr("src", a[P3T2][0]);
        $("#ktp_3_2").attr("src", a[P3T2][0]);
        $("#kp3").text(P3T2 +" ("+player3+")");
      }
      else{alert("Aita kono kotha ato mil kmne hoy?");}
    }
    for (i = 1; i <= 2; i++) {
      $("#ktpn_1_" + i + "").text(player1);
    }
    for (i = 1; i <= 2; i++) {
      $("#ktpn_2_" + i + "").text(player2);
    }
    for (i = 1; i <= 2; i++) {
      $("#ktpn_3_" + i + "").text(player3);
    }
    knockout_refresh();
  }
  if(knockout >=3)
  {
    if(kppo[0]>kppo[1] && kppo[0]>kppo[2])
    {

    }
    else if(kppo[0]<kppo[1] && kppo[0]<kppo[2])
    {
      
    }
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

function team_refresh()
{
  for (i = 1; i <= 6; i++) {
    $("#plt" + i + "").text(tpl[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#wt" + i + "").text(tw[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#dt" + i + "").text(td[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#lt" + i + "").text(tl[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#st" + i + "").text(ts[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#at" + i + "").text(ta[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#dift" + i + "").text(tdif[i - 1]);
  }
  for (i = 1; i <= 6; i++) {
    $("#pot" + i + "").text(tpo[i - 1]);
  }
}
function player_refresh()
{
  for (i = 1; i <= 3; i++) {
    $("#pl" + i + "").text(ppl[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#w" + i + "").text(pw[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#d" + i + "").text(pd[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#l" + i + "").text(pl[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#s" + i + "").text(ps[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#a" + i + "").text(pa[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#dif" + i + "").text(pdif[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#po" + i + "").text(ppo[i - 1]);
  }
}
function knockout_refresh()
{
  for (i = 1; i <= 3; i++) {
    $("#kpl" + i + "").text(kppl[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#kw" + i + "").text(kpw[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#kd" + i + "").text(kpd[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#kl" + i + "").text(kpl[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#ks" + i + "").text(kps[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#ka" + i + "").text(kpa[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#kdif" + i + "").text(kpdif[i - 1]);
  }
  for (i = 1; i <= 3; i++) {
    $("#kpo" + i + "").text(kppo[i - 1]);
  }
}
// initilize jqery data table //
$(document).ready(function () {
  
  for(i=1;i<=3;i++)
  {
    $("#table_"+i+"").DataTable({
      paging: false,
      bFilter: false,
      bInfo: false,
    });
  }
  

  $("#number_number").show();
  // $("#player_name").hide();
  // $("#team_name").hide();
  // $("#team_number").hide();
  // $("#page1").hide();
  // $("#page2").hide();
  // $("#page3").hide();
  // $("#page4").hide();
  // $("#page5").hide();

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
        console.log(value_return(arr["real"]));
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

      $("#tp_1_1").attr("src", a[P1T1][0]);
      $("#tp_1_2").attr("src", a[P1T1][0]);
      $("#tp_1_3").attr("src", a[P1T1][0]);
      $("#tp_1_4").attr("src", a[P1T1][0]);

      $("#tp_2_1").attr("src", a[P1T2][0]);
      $("#tp_2_2").attr("src", a[P1T2][0]);
      $("#tp_2_3").attr("src", a[P1T2][0]);
      $("#tp_2_4").attr("src", a[P1T2][0]);

      $("#tp_3_1").attr("src", a[P2T1][0]);
      $("#tp_3_2").attr("src", a[P2T1][0]);
      $("#tp_3_3").attr("src", a[P2T1][0]);
      $("#tp_3_4").attr("src", a[P2T1][0]);

      $("#tp_4_1").attr("src", a[P2T2][0]);
      $("#tp_4_2").attr("src", a[P2T2][0]);
      $("#tp_4_3").attr("src", a[P2T2][0]);
      $("#tp_4_4").attr("src", a[P2T2][0]);

      $("#tp_5_1").attr("src", a[P3T1][0]);
      $("#tp_5_2").attr("src", a[P3T1][0]);
      $("#tp_5_3").attr("src", a[P3T1][0]);
      $("#tp_5_4").attr("src", a[P3T1][0]);

      $("#tp_6_1").attr("src", a[P3T2][0]);
      $("#tp_6_2").attr("src", a[P3T2][0]);
      $("#tp_6_3").attr("src", a[P3T2][0]);
      $("#tp_6_4").attr("src", a[P3T2][0]);
      ////////////////////////////////////////////////
      $("#p1").text(player1);
      $("#p2").text(player2);
      $("#p3").text(player3);

      player_refresh();

      //////////////////////////////////////
      $("#pt1").text(P1T1);
      $("#pt2").text(P1T2);
      $("#pt3").text(P2T1);
      $("#pt4").text(P2T2);
      $("#pt5").text(P3T1);
      $("#pt6").text(P3T2);

      team_refresh();

      ///////////////////////
      for (i = 1; i <= 8; i++) {
        $("#tpn_1_" + i + "").text(player1);
      }
      for (i = 1; i <= 8; i++) {
        $("#tpn_2_" + i + "").text(player2);
      }
      for (i = 1; i <= 8; i++) {
        $("#tpn_3_" + i + "").text(player3);
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
