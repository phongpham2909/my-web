(function($) {
    // Navigation scrolls
    $(".navbar-nav li a").on('click', function(event) {
      $('.navbar-nav li').removeClass('active');
      $(this).closest('li').addClass('active');
    });
    $(".navbar-collapse a").on('click', function() {
      $(".navbar-collapse.collapse").removeClass('in');
    });
})(jQuery);