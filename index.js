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
             return alert (`You don't have enough coins.`);
              

    
        }
        
            let coins=totalCoins-20;
           getElement('total-coins').innerText=coins;
           alert(`📞 calling ${cardSubTitle} ${serviceNumber}`);
        
        }
        

        
       
            
            
       
        
        
        
        

        
        
    )
    
}








