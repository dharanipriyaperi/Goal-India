 /*--------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------Created by Dharani Peri 8/8/2018-------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/////////////////////////////////jquery form validation ready///////////////////////////////            
$('document').ready(function(){
                $("form").validate()
            })
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



/////////////////////////////////////final submit begin/////////////////////////////
//function myFunctionHome() {
//    
//    if (confirm('your profile is successfully submitted. We will get back to you within 48 hours with a personalized feedback. Thank you for your patience'))
//    {
//        window.location.href = "index.html";
//    } 
//    else
//        window.location.href = "ProfileEvaluation.html";
//    
//}

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
