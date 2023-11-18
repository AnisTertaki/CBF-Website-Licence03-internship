$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Allez-y, vous avez un nom, n'est-ce pas ?",
                    minlength: "votre nom doit être composé d'au moins 2 caractères"
                },
                subject: {
                    required: "Allez-y, vous avez un sujet, n'est-ce pas?",
                    minlength: "votre sujet doit être composé d'au moins 4 caractères"
                },
                number: {
                    required: "Allez-y, vous avez un numéro, n'est-ce pas?",
                    minlength: "votre numéro doit être composé d'au moins 5 caractères"
                },
                email: {
                    required: "pas d'email, pas de message"
                },
                message: {
                    required: "euh...ouais, vous devez écrire quelque chose pour envoyer ce formulaire.",
                    minlength: "c'est tout? Ah bon?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})