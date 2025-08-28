// get the all id function

function getElement(id){
    const element =document.getElementById(id);
    return element;
}

// get the all  class 
function getClassElement(className){
    const element =document.getElementsByClassName(className);
    return element;
}

// heart icon count 


const loveBtns=getClassElement('love-btn');
for (const loveBtn  of loveBtns) {
   loveBtn.addEventListener('click',function(){

    const loveMainBtn=getElement('love-main-btn').children[0].children[0].innerText;
    
    const totalLoveCount=Number(loveMainBtn)+1;
    getElement('love-main-btn').children[0].children[0].innerText=totalLoveCount;
  
})
}

//call buttons 

const callBtns=getClassElement('call-btn');
for (const callBtn  of callBtns) {
    callBtn.addEventListener('click',function () {
        
        const cardTitle=callBtn.parentNode.parentNode.children[1].children[0].innerText;

        const cardSubTitle=callBtn.parentNode.parentNode.children[1].children[1].innerText ;

        const serviceNumber=callBtn.parentNode.parentNode.children[2].children[0].innerText ;


        let totalCoins=Number(getElement('total-coins').innerText);
             if (totalCoins<20) {
             return alert (` ❌ You don't have enough coins.`);
              

    
        }
        
            let coins=totalCoins-20;
           getElement('total-coins').innerText=coins;
           alert(`📞 calling ${cardSubTitle} ${serviceNumber} ,,,`);

       //time

      const localTime={
    
       time:new Date().toLocaleTimeString(),
        }
   
           const historyCartContainer=getElement('cart-container');

           const newCart=document.createElement('div');
           newCart.innerHTML=`
            <div class="flex justify-between gap-5 items-center bg-[#f5fff6] p-4 mt-4">
            <div>
              <h1
                id="service-title"
                class="font-semibold font-[roboto] text-[18px] text-[#111111]"
              >
                ${cardTitle}
              </h1>
              <p
                id="service-number "
                class="font-normal font-[roboto] text-base text-[#5C5C5C]"
              >
                ${serviceNumber}
              </p>
            </div>
            <div>
              <p
                id="local-time"
                class="font-normal font-[roboto] text-[18px] text-[#5C5C5C]"
              >
                ${localTime.time}
              </p>
            </div>
          </div>
        
           `

           historyCartContainer.append(newCart);
        
        }
        
    )
    
}

           //clear function
            getElement('clear-btn').addEventListener('click',function(){
                        const historyCartContainer=getElement('cart-container');
                        historyCartContainer.innerText='';
                   })

    //copy function

     const copyBtns= getClassElement('copy-btn');
     for (const copyBtn  of  copyBtns) {
     copyBtn.addEventListener('click',function () {
       const cardTitle=copyBtn.parentNode.parentNode.children[1].children[0].innerText;
     const serviceNumber=copyBtn.parentNode.parentNode.children[2].children[0].innerText ;
     navigator.clipboard.writeText(serviceNumber);
     
        alert(`✔ ${cardTitle} hotline number  ${serviceNumber}  copied to clipboard `)
    
   
     getElement('copy-main-btn').innerText++;
    
});
}


// 





