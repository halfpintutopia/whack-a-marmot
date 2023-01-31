/*jshint esversion: 6, expr: true */
/* jshint -W117 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
// The two important methods here are
// path.getTotalLength and path.getPointAtLength

// For more info see:
// https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement

var path = document.getElementById('path')
console.log('typeof : ', typeof path);
var obj = document.getElementById('obj');
// Length of path
var pathLength = Math.floor( path.getTotalLength() );

// Move obj element along path based on percentage of total length
function moveObj(prcnt)
{
  console.log(prcnt)
  prcnt = (prcnt*pathLength) / 100;
    console.log(prcnt, pathLength)


  // Get x and y values at a certain point in the line
  pt = path.getPointAtLength(prcnt);
  pt.x = Math.round(pt.x);
  pt.y = Math.round(pt.y);

  obj.style.webkitTransform = 'translate3d('+pt.x+'px,'+pt.y+'px, 0)';
}

// Initialize
moveObj(25);

// Slider functionality
var sliderEl = document.getElementById('slider');
var sliderValEl = document.getElementById('slider_val');
sliderEl.addEventListener('mousemove', function() {

  sliderValEl.value = this.value;
  moveObj(sliderValEl.value);
});

// Animation functionality
// Use request animation frame for better performance
// if you're doing a lot of animation
var toggleAnimationBtn = document.getElementById('toggle_animation_btn')
var animationTimer = false;

function animationHandler(prcnt) {
  moveObj(prcnt);
  sliderEl.value = prcnt;
  sliderValEl.value = prcnt;


  if(prcnt < 100)
  {
    animationTimer = setTimeout(function() {
      animationHandler(prcnt+1);
    },50)
  }
  else
  {
    animationTimer = setTimeout(function() {
      animationHandler(0);
    }, 50);
  }
}

toggleAnimationBtn.addEventListener('mouseup', function() {
  if(animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = false;
  }
  else
  {
    animationTimer = animationHandler(0);
  }
});
