require('aframe');

AFRAME.registerComponent('play-sounds', {
  init: function () {
    this.el.addEventListener("markerFound", (e) => {
      var entity = document.querySelector('[sound]');
      entity.components.sound.playSound();
    });
  
    this.el.addEventListener("markerLost", (e) => {
      // var entity = document.querySelector('[sound]');
      // entity.components.sound.playSound();
    });
  }
});
