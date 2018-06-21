$(document).ready(() => {
$('#myEmail').trigger("focus") 

    $('input').focus(function(){
        console.log(this)
        $(this).addClass('greenBorder')

    })

    $('input').focusout(function(){
            $(this).removeClass('greenBorder')

    })
    $('form').submit((event)=>{
    	event.preventDefault()
    	alert("you are logged in")
    })


     






}) // end doc ready