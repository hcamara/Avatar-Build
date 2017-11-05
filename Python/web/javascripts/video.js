var vid = document.getElementById("bgvid");
var idle = document.getElementById("idle");
var talk = document.getElementById("talk");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

function vidSwitch(){
	if(idle.style.display != "none"){
		idle.style.display = "none";
		talk.style.display = 'block';
	}else{
		idle.style.display = "block";
		talk.style.display = 'none';
	}
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
