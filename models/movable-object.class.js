class MovableObject {
  x = 120;
  y = 200;
  img;
  height = 150;
  width = 150;
  ImageCache = {};
  otherDirection = false;

  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('Image') <img id="image">
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.ImageCache[path] = img;
    });
  }



  moveLeft() {
    setInterval(() => {
        this.x -= 0.15;
      }, 1000 / 60);
  }
}
