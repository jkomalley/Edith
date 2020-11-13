(function($) {
  "use strict"; // Start of use strict
  $(function() {
    $('#spritespin').spritespin({
      source: 'assets/rotation_sprite.jpg',
      width: 500,
      height: 500,
      frames: 19,
      framesX: 19,
      frameTime: 150,
      sense: -1
    });
  })
})(jQuery); // End of use strict
