$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            Fname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            }

        }
    })
})