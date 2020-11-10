(function($) {
  "use strict"; // Start of use strict
  $(function() {
    $('#spritespin').spritespin({
      source: 'assets/sprite_test.jpg',
      width: 200,
      height: 200,
      frames: 10,
      framesX: 10,
      frameTime: 200
    });
  })
})(jQuery); // End of use strict
