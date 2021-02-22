// require('aframe');
// require('aframe-event-set-component');
// require('aframe-look-at-component');

// require('./cursor.js');

AFRAME.registerComponent('color-randomizer', {
  init: function () {
    let colors = ["red", "green", "blue", "black", "orange", "white"]
    var el = this.el;
    el.addEventListener('click', (e) => {
      this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
    });
  }
});

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      console.log('item clicked')
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});