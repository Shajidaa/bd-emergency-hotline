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






