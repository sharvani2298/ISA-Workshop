 //sharvani shrestha
 let display = document.getElementById("display");//fetching the display board 
// now here we are fetching the all the calculator buttons
 let button = document.querySelectorAll("button");
 let screenvalue = "";

    for (items of button) {//here we are looping through all the buttons 
//Using click eventListener so that when we click a button the following arrow function will execute
        items.addEventListener('click', (val) => {
        buttonText = val.target.innerText; 
        console.log(buttonText);// this line of code is just checking if the code is working or not
    if (buttonText == 'C')//if the user clicks "C" the screenvalue will be cleared
      {
       screenvalue = " ";
       display.value = " ";//i could have written display.value=screenvalue but it is not working
    } 
//this block of code will execute when the user clicks "="
  else if (buttonText == '=') 
     {
//eval()method is used to evaluate the expression entered by user in the screeevalue or the display screen 
    screenvalue = eval(screenvalue);
    display.value = screenvalue;// final value is being displayed in the screen
   } 
   else 
  {
       screenvalue += buttonText; 
       display.value = screenvalue;
   }
   })
}
//sharvani shrestha







