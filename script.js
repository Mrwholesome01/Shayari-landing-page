let scrollSpeed = 10; // Change this value to adjust the scrolling speed
let img = document.getElementsByTagName('img')

function scrollImage() {
  let currentPos = img.scrollLeft;
  img.scrollLeft += scrollSpeed;
  if (currentPos == img.scrollLeft) {
    img.scrollLeft = 1;
  }
}

setInterval(scrollImage, 100);
