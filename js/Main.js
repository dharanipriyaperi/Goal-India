 /*--------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------Created by Dharani Peri 8/8/2018-------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//////////////////////////////////signin function ready check begin//////////////////////
$(document).ready(function(c) {
	$('.sinup-close').on('click', function(c){
		$('.setting').fadeOut('slow', function(c){
	  		$('.setting').remove();
		});
	});	  
});
//////////////////////////////////signin function ready check end//////////////////////

//////////////////////////Password match check begin////////////////////////////////

$(document).ready(function(){
        var $submitBtn = $("#form input[type='submit']");
        var $passwordBox = $("#password");
        var $confirmBox = $("#confirm_password");
        var $errorMsg =  $('<span id="error_msg">Passwords do not match.</span>');

        // This is incase the user hits refresh - some browsers will maintain the disabled state of the button.
        $submitBtn.removeAttr("disabled");

        function checkMatchingPasswords(){
            if($confirmBox.val() !== "" && $passwordBox.val !== ""){
                if( $confirmBox.val() !== $passwordBox.val() ){
                    $submitBtn.attr("disabled", "disabled");
                    $errorMsg.insertAfter($confirmBox);
                   
                }
            }
        }

        function resetPasswordError(){
            $submitBtn.removeAttr("disabled");
            var $errorCont = $("#error_msg");
            if($errorCont.length > 0){
                $errorCont.remove();
            }  
        }


        $("#confirm_password, #password")
             .on("keydown", function(e){
                /* only check when the tab or enter keys are pressed
                 * to prevent the method from being called needlessly  */
                if(e.keyCode === 13 || e.keyCode === 9) {
                    checkMatchingPasswords();
                }
             })
             .on("blur", function(){                    
                // also check when the element looses focus (clicks somewhere else)
                checkMatchingPasswords();
            })
            .on("focus", function(){
                // reset the error message when they go to make a change
                resetPasswordError();
            });

    });
//////////////////////////Password match check end////////////////////////////////

/////////////////////////password strength check begin///////////////////////////
function myFunctionCheckPassword(){
        var password = document.getElementById("password");
        var filter = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!filter.test(password.value)) {
            alert('Please see that your password contains atleast one of a digit, lower case letter, upper case letter and a special character');
            password.focus();
            return false;
        }
        return true;
    }

//////////////////////////password strength check end///////////////////////////////////

/////////////////////////////////jquery form validation ready///////////////////////////////            
$('document').ready(function(){
                $("form").validate();
            });
/////////////////////////////////jquery form validation ready///////////////////////////////            
            
//////////////////////////////////////letters Validation begin///////////////////////////
function myFunctionLetters(input)
{
var regex = /[^a-z ]/gi;
input.value = input.value.replace(regex,'');
}
//////////////////////////////////////letters Validation end///////////////////////////

//////////////////////////////////////Numbers and letters Validation begin///////////////////////////
function myFunctionNumbersLetters(input)
{
var regex = /[^a-z 0-9.,]/gi;
input.value = input.value.replace(regex,'');
}
//////////////////////////////////////Numbers and letters Validation end///////////////////////////


//////////////////////////////////////Dob Validation begin///////////////////////////
function myFunctionDob(input)
{
var regex = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
input.value = input.value.replace(regex,'');
}
//////////////////////////////////////Dob Validation end///////////////////////////

//////////////////////////////////////Numbers Validation begin///////////////////////////
function myFunctionNumbers(input)
{
var regex = /[^0-9]/g;
input.value = input.value.replace(regex,'');
}
//////////////////////////////////////Numbers Validation end///////////////////////////

//////////////////////////////////////email Validation begin///////////////////////////
function myFunctionEmail() {
        var email = document.getElementById("email");
        var filter = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return false;
        }
        return true;
    }
//////////////////////////////////////email Validation end///////////////////////////

//////////////////////////////////////minmax Validation begin///////////////////////////
function myFunctionMinMax(value, min, max)
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return NaN; 
    else if(parseInt(value) > max) 
        return alert('Number should not be greater than '+ max); 
    else return value;
}

//////////////////////////////////////minmax Validation end///////////////////////////

/////////////////////////////////////final submit begin/////////////////////////////

function formcheck() {
  var fields = $(".required")
        .find("select, textarea, input").serializeArray();
  
  $.each(fields, function(i, field) {
    if (!field.value)
      alert(field.name + ' is required');
   }); 
  console.log(fields);
}
////////////////////////////////////////final submit end//////////////////////////////   