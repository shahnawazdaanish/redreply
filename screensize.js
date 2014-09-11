window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    // your size calculation code here
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};