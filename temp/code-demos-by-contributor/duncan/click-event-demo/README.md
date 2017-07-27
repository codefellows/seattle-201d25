Click Event Demo
================


**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Click Events</title>
  </head>
  <body>
    <img class="track-images" src="img/bubblegum.jpg">
    <img class="track-images" src="img/bubblegum.jpg">
    <img class="track-images" src="img/bubblegum.jpg">

    <script src="js/app.js"></script>
  </body>
</html>
```   

**js/app.js**
``` javascript   
function handleImageClick(event){
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var trackImages = document.getElementsByClassName('track-images');

for (var i = 0; i < trackImages.length; i++){
  trackImages[i].addEventListener('click', handleImageClick);
}
```   

