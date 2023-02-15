function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
     subtotalElement.innerText = value;
}

function calculateSubTotal(){
     // calculate total 

     const currentPhoneTotal = getTextElementValueById('phone-total');
     const currentCaseTotal = getTextElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;

     setTextElementValueById('sub-total', currentSubTotal);
 
     

     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString);

     setTextElementValueById('tax-amount', taxAmount);

     const finalAmount = currentSubTotal + taxAmount;
     setTextElementValueById('final-total', finalAmount);


}