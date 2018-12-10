var element_position = $('#scroll-to').offset().top;

        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = element_position;

            if(y_scroll_pos > scroll_pos_test) {
              $("#newship").addClass("ship-animate-in")
            } else {
              $("#newship").removeClass("ship-animate-in")
            }
        });

        $(document).on('click', 'a[href^="#"]', function (event) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          }, 500);
        });
