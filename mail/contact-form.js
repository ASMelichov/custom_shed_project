/* jQuery script is for a contact form. When the form is submitted, 
it validates the input fields using jqBootstrapValidation. 
If the validation passes, it sends the form data (name, email, subject, message) 
to a PHP script (contact-form.php) via AJAX POST request.
 The script updates the UI based on the AJAX call's success or failure.
  On success, it displays a success message and resets the form. On failure, it shows an error message.
   The script also re-enables the send button and updates its text after the AJAX call completes.
    Additionally, it clears any alert messages when any form field is focused.*/
$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {},
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $("#sendMessageButton").prop("disabled", true);
            $("#sendMessageButton span").text("SENDING...");

            $.ajax({
                url: 'mail/contact-form.php',
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    toEmail: 'contact@customshed.ie' // contact form email address
                },
                cache: false,
                success: function () {
                    $('#alertMessage').html("<div class='alert alert-success alert-dismissible'>");
                    $('#alertMessage > .alert-success').html("<button type='button' class='btn-close' data-bs-dismiss='alert' aria-hidden='true'></button>");
                    $('#alertMessage > .alert-success').append("<strong>" + name + ", your message has been sent. </strong>");
                    $('#alertMessage > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $('#alertMessage').html("<div class='alert alert-danger alert-dismissible'>");
                    $('#alertMessage > .alert-danger').html("<button type='button' class='btn-close' data-bs-dismiss='alert' aria-hidden='true'></button>");
                    $('#alertMessage > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#alertMessage > .alert-danger').append('</div>');
                },
                complete: function () {
                    $("#sendMessageButton").prop("disabled", false);
                    $("#sendMessageButton span").text("Send Message");
                }
            });
        }
    });

    $('#name, #email, #subject, #message').focus(function () {
        $('#alertMessage').html('');
    });
});

                