let  currUrl = `https://api.frankfurter.app/currencies`


let dropdown = document.querySelectorAll(".dropdown select")




for (let select of dropdown){
    for(currCode in countryList){
        let newoptions = document.createElement("option");
         newoptions.innerText= currCode;
         newoptions.value= currCode;
         select.append(newoptions)
    }

     select.addEventListener("change",(evt) =>{
      updateFlag(evt.target);
    });
 

    }

    const updateFlag=(element)=>{
       let currCode = element.value;
       let countryCode = countryList[currCode];
       let newscr  = `https://flagsapi.com/${countryCode}/flat/64.png`;
       let img = element.parentElement.querySelector("img");
       img.scr = newscr;
    }
