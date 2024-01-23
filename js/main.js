(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Fixed Navbar
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.fixed-top').addClass('shadow-sm bg-white');
            } else {
                $('.fixed-top').removeClass('shadow-sm bg-white');
            }
        });
    } else {
        $('.fixed-top').addClass('sticky-top bg-white');
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Progress Bar
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Related post carousel
    $(".related-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });

    // Image comparison
    $(".twentytwenty-container").twentytwenty({});

})(jQuery);


$(document).ready(function () {
    $('#commentForm').submit(function (e) {
        e.preventDefault();

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var comment = $('#comment').val().trim();

        if (name === "" || email === "" || comment === "") {
           // If one of the fields is empty, show a warning
            alert("Please fill in all fields.");
            return;
        }

        /// Here will be my code for sending data to the server...

     // Clear the form fields
        $('#name').val('');
        $('#email').val('');
        $('#comment').val('');

        // Отображаем модальное окно
        $('#confirmationModal').modal('show');
    });
});
     // Appointment form
     $(document).ready(function() {
        // Initialize the date picker widget
        $('#datePicker').datetimepicker({
            format: 'L', // Формат даты
            useCurrent: false // Disable automatic use of the current date
        });
    
       // Initialize the time picker widget
        $('#timePicker').datetimepicker({
            format: 'LT', // Time format
            useCurrent: false // Disable automatic use of current time
        });
    
        // Form submission handler
        $('#appointmentForm').submit(function(e) {
            e.preventDefault();
            var formData = $(this).serialize(); // Collect data from the form
    
            // Here will be my code for sending data to the server...
             // Example:
             // $.post('SERVER_URL', formData, function(response) {
             // // Processing the response from the server
             // });
            alert('Form Sent: ' + formData); // Убрать эту строку при реализации отправки
        });
    });

    