// Set height of the SVG paths as constants
const svg1 = document.getElementById("svgPath");
const svg2 = document.getElementById("svgPath2");

const length1 = svg1.getTotalLength();
const length2 = svg2.getTotalLength();

// Start positioning of the SVG drawings
svg1.style.strokeDasharray = length1;
svg2.style.strokeDasharray = length2;

// Hide SVG paths before scrolling starts
svg1.style.strokeDashoffset = length1;
svg2.style.strokeDashoffset = length2;

// Easing function
function easeOutExpo(t) {
  return 1 - Math.pow(2, -10 * t);
}

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollpercent = scrollY / scrollHeight;

  const easedScrollpercent = easeOutExpo(scrollpercent);

  const draw1 = length1 * easedScrollpercent;
  const draw2 = length2 * easedScrollpercent;

  // Reverse the drawing when scrolling upwards
  svg1.style.strokeDashoffset = length1 - draw1;
  svg2.style.strokeDashoffset = length2 - draw2;
});