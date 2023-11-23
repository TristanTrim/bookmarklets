
p = document.getElementById("movie_player")

function keepPausing(){
  p.pauseVideo();
  alert("u best be moving on now");
	p.playVideo();
	setTimeout(keepPausing,timeout);
}
timeout = 1000*60*5;
keepPausing();
