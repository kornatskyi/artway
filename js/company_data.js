'use strict';

//Make posible to change a contact data  in one place

//In HTML when you want to add phone number, email, etc. You should creater
// <span> component inside the anchorn that will make this information active.
// And add class="typeOfTheInformation"



const email = "artwayconstrucion@gmail.com";
const phone_number = "209-876-1234";
const companyAddress = ` ArtWay Construction<br />Issaquah, WA 98027<br />U.S.A.`

function fillDataField(htmlComponents, data, type) {
    htmlComponents.forEach(component => {
        component.innerHTML = data;
        
        //Change link in the parent element
        if(type === 'phone') {
            component.parentElement.href = "tel:" + data;

        }
        if(type === 'email') {
            component.parentElement.href = "mailto:" + data;
        }
    });
}

fillDataField(document.querySelectorAll(".email"), email, 'email');
fillDataField(document.querySelectorAll(".phone"), phone_number, "phone");
fillDataField(document.querySelectorAll(".address"), companyAddress);