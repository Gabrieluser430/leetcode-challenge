'use strict';

const phoneInput = document.getElementById("phone");
let phoneInputLength = 0;

phoneInput.addEventListener('input', () => {
    phoneInputLength = phoneInput.value.length;
    console.log(phoneInputLength);
    
    if (phoneInputLength == 3) {
        const phoneInputArr = phoneInput.value.split("");
        for (let i = phoneInputArr.length; i > 0; i--) {
            phoneInputArr[i] = phoneInputArr[i-1]; 
        }
        phoneInputArr[0] = "(";
        phoneInputArr[phoneInputArr.length] = ")";
        phoneInput.value = phoneInputArr.join("");
    }

    if (phoneInputLength == 4) {
        const phoneInputArr = phoneInput.value.split("");
        console.log(phoneInputArr)
        for (let i = 0; i < phoneInputArr.length; i++) {
            phoneInputArr[i] = phoneInputArr[i+1];
        }
        phoneInputArr.pop();
        console.log(phoneInputArr);
        phoneInput.value = phoneInputArr.join("");
    }
});
