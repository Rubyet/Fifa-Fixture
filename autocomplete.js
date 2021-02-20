$( function() {
    var availableTags = [
      "real",
      "barca",
      "juv",
      "bryan",
      "manc",
      "paris"
    ];
    $( "#in6" ).autocomplete({
      source: availableTags
    });
    $( "#in7" ).autocomplete({
      source: availableTags
    });
    $( "#in8" ).autocomplete({
      source: availableTags
    });
    $( "#in9" ).autocomplete({
      source: availableTags
    });
    $( "#in10" ).autocomplete({
      source: availableTags
    });
    $( "#in11" ).autocomplete({
      source: availableTags
    });
  } );

  var a = [];
  a['real'] = ['/img/teams_logo/243.webp']; 
  a['barca'] = ['/img/teams_logo/241.webp'];
  a['juv'] = ['/img/teams_logo/45.webp'];
  a['bryan'] = ['/img/teams_logo/21.webp'];
  a['manc'] = ['/img/teams_logo/10.webp'];
  a['paris'] = ['/img/teams_logo/73.webp'];