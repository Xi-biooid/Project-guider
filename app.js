var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})

// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================

$(document).ready(function() {
  const lamp = $("#lamp");
  let rotation = 0;
  let direction = 1; // 1 for forward, -1 for backward
  const swingAngle = 40;

  startLampSwing();

  function startLampSwing() {
    swingLamp();
  }

  function swingLamp() {
    rotation += 0.5 * direction;

    if (Math.abs(rotation) >= swingAngle) {
      direction *= -1; // Change direction when reaching the swing angle
    }

    lamp.css({
      "-webkit-transform": "rotate(" + rotation + "deg)"
    });

    requestAnimationFrame(swingLamp);
  }

  function toggleLamp() {
    lamp.toggleClass("off");
  }

  function flicker() {
    toggleLamp();
    setTimeout(function() {
      toggleLamp();
    }, Math.round(Math.random() * 150 + 100));

    setTimeout(function() {
      flicker();
    }, Math.round(Math.random() * 1000 + 100));
  }

  flicker();
});
function playAudio() {
  var audio = document.getElementById("electricSound");
  audio.volume = 0.05; // Set the volume to 0.5 (half volume)
  audio.play();
}

// Set an interval to play the audio every 5 minutes (300,000 milliseconds)
setInterval(playAudio, 10000);
