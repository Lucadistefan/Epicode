$(document).ready(function() {
    $('.obbligatorio').validate({
        rules: {
        username: "required",
        email: "required",
        password: {
            required: true,
            minlength: 5,
            maxlength: 8,
        },
        },
        messages: 
        

    
    }),
});