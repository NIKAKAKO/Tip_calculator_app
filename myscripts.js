let buttons=document.getElementById("buttons").children;
let inputValue=document.getElementById("inp1");
let NumberofPeople=document.getElementById("result0");
let tipAmount=document.getElementById("tipamountValue");
let totalAmount=document.getElementById("totaltipamountValue");
let percentvalue=0;
NumberofPeople.value=0;
let custom=document.getElementById("custom");
let reset=document.getElementById("reset");


//bill input listener
inputValue.addEventListener("change", ()=> {
   console.log(inputValue.value);
   calculate();
    }
    
    )
//numberofpeoplelistener
    NumberofPeople.addEventListener("change", ()=> {
        calculate();
         }
         
         )

//buttons listeners
    for ( i=0; i<buttons.length; i++) {

        buttons[i].addEventListener("click", (event)=> {
    let buttonclick=event.target;
        
        percentvalue=buttonclick.value;
    
        calculate();
        })
        
        }

        //custom listener
        custom.addEventListener("click", (event)=> {
            custom.type="number";
        
        })

        //reset
        reset.addEventListener("click", (event)=> {
            percentvalue=0;
            custom.value=0;
            NumberofPeople.value=0;
            inputValue.value=0;
            tipAmount.innerHTML=0;
             totalAmount.innerHTML=0;
        })



function calculate () {

    if (NumberofPeople.value==0) {
        document.getElementById("cantbetext").style.display="block";
        tipAmount.innerHTML=0;
        totalAmount.innerHTML=0;
    }
else if (NumberofPeople.value%1>0) {
    tipAmount.innerHTML=0;
    totalAmount.innerHTML=0;

}
else {
    console.log(NumberofPeople.value);
    document.getElementById("cantbetext").style.display="none";
    tipresult=(Number(inputValue.value)/NumberofPeople.value*Number(percentvalue))
    tipAmount.innerHTML=tipresult.toFixed(2);
    totalAmount.innerHTML=(Number(inputValue.value)/NumberofPeople.value+tipresult).toFixed(2);
 
}

}




