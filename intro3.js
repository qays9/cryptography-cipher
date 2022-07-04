var titleText = document.title + " - ";
	function titleMarquee() {
	titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
	document.title = titleText;
	setTimeout("titleMarquee()", 450);
	}
	
	
var tag = document.createElement('script');
var player_wrapper = document.getElementById('player_wrapper');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  if (window.innerWidth < 600) {
    return;
  }
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'VSXg2swBmrY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      'autoplay': 1,
      'autohide': 1,
      'controls': 0,
      'showinfo': 0,
      'loop': 1,
      'volume': 1,
	  playlist: 'VSXg2swBmrY',
    }
  });
  window.onresize = bgCover;
}



function onPlayerReady(event) {
  event.target.playVideo();
  bgCover();
}
function onPlayerStateChange(event) {}
var resolution = 16/9;
function bgCover () {
  if (window.innerWidth/resolution > window.innerHeight) {
    var w = window.innerWidth;
    var h = w/resolution;
    var offset = (h-window.innerHeight)/2;
    player.a.width = '100%';
    player.a.height = h;
    player_wrapper.style.top = '-' + offset + 'px';
  }
  else {
    var h = window.innerHeight;
    var w = h*resolution;
    var offset = (w-window.innerWidth)/2;
    player.a.height = '100%';
    player.a.width = w;
    player.a.style.left = '-' + offset + 'px';
  }
}
